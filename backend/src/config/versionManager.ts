import { prisma } from '../db/prisma';
import { eventBus } from '../events/eventBus';
import { Prisma } from '@prisma/client';

export class VersionManager {
  static async createVersion(configSlug: string, config: any, createdBy?: string): Promise<any> {
    const specifiedVersion = typeof config.version === 'string' ? config.version.trim() : '';
    const baseVersion = specifiedVersion || `1.0.${Date.now()}`;
    let version = baseVersion;
    let versionRecord: any;
    let activeConfig: any;

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const configWithVersion = {
        ...config,
        version
      };

      try {
        const result = await prisma.$transaction(async (tx) => {
          const history = await tx.configVersion.create({
            data: {
              config_slug: configSlug,
              version,
              config: configWithVersion,
              changes: { created_at: new Date().toISOString() },
              created_by: createdBy
            }
          });

          const active = await tx.appConfig.upsert({
            where: { slug: configSlug },
            update: {
              name: configWithVersion.name,
              description: configWithVersion.description,
              version,
              config: configWithVersion,
              is_active: true,
              updated_at: new Date()
            },
            create: {
              name: configWithVersion.name,
              slug: configSlug,
              description: configWithVersion.description,
              version,
              config: configWithVersion,
              is_active: true,
              created_by: createdBy
            }
          });

          return { history, active };
        });

        versionRecord = result.history;
        activeConfig = result.active;
        break;
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002' &&
          attempt < 4
        ) {
          version = `${baseVersion}.${Date.now()}.${attempt + 1}`;
          continue;
        }

        throw error;
      }
    }

    eventBus.emit('config.version.created', {
      configSlug,
      version,
      createdBy
    });

    return {
      active: activeConfig,
      history: versionRecord
    };
  }

  static async getVersionHistory(configSlug: string): Promise<any[]> {
    return await prisma.configVersion.findMany({
      where: { config_slug: configSlug },
      orderBy: { created_at: 'desc' }
    });
  }

  static async rollback(configSlug: string, targetVersion: string, rollbackBy?: string): Promise<any> {
    const targetVersionRecord = await prisma.configVersion.findUnique({
      where: {
        config_slug_version: {
          config_slug: configSlug,
          version: targetVersion
        }
      }
    });

    if (!targetVersionRecord) {
      throw new Error(`Version ${targetVersion} not found for config ${configSlug}`);
    }

    const rollbackVersion = `${targetVersion}-rollback-${Date.now()}`;
    const rollbackConfig = targetVersionRecord.config === null
      ? Prisma.JsonNull
      : targetVersionRecord.config as Prisma.InputJsonValue;

    const rollbackRecord = await prisma.configVersion.create({
      data: {
        config_slug: configSlug,
        version: rollbackVersion,
        config: rollbackConfig,
        changes: {
          rollback_from: targetVersion,
          rolled_back_by: rollbackBy,
          rolled_back_at: new Date().toISOString()
        },
        created_by: rollbackBy
      }
    });

    const rollbackConfigObject = typeof targetVersionRecord.config === 'object' && targetVersionRecord.config !== null
      ? targetVersionRecord.config as Record<string, any>
      : {};

    const activeConfig = await prisma.appConfig.upsert({
      where: { slug: configSlug },
      update: {
        name: rollbackConfigObject.name,
        description: rollbackConfigObject.description,
        config: rollbackConfig,
        version: rollbackVersion,
        is_active: true,
        updated_at: new Date()
      },
      create: {
        name: rollbackConfigObject.name || configSlug,
        slug: configSlug,
        description: rollbackConfigObject.description,
        config: rollbackConfig,
        version: rollbackVersion,
        is_active: true,
        created_by: rollbackBy
      }
    });

    eventBus.emit('config.rolledback', {
      configSlug,
      fromVersion: targetVersion,
      toVersion: rollbackVersion,
      rolledBackBy: rollbackBy
    });

    return {
      active: activeConfig,
      rollback: rollbackRecord
    };
  }

  static async compareVersions(configSlug: string, version1: string, version2: string): Promise<any> {
    const v1 = await prisma.configVersion.findUnique({
      where: {
        config_slug_version: {
          config_slug: configSlug,
          version: version1
        }
      }
    });

    const v2 = await prisma.configVersion.findUnique({
      where: {
        config_slug_version: {
          config_slug: configSlug,
          version: version2
        }
      }
    });

    if (!v1 || !v2) {
      throw new Error('One or both versions not found');
    }

    return {
      version1: { version: version1, config: v1.config },
      version2: { version: version2, config: v2.config },
      differences: this.deepDiff(v1.config, v2.config)
    };
  }

  private static deepDiff(obj1: any, obj2: any, path: string = ''): any[] {
    const differences: any[] = [];
    const allKeys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]);

    for (const key of allKeys) {
      const currentPath = path ? `${path}.${key}` : key;
      const val1 = obj1?.[key];
      const val2 = obj2?.[key];

      if (typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {
        differences.push(...this.deepDiff(val1, val2, currentPath));
      } else if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        differences.push({
          path: currentPath,
          from: val1,
          to: val2,
          changed: true
        });
      }
    }

    return differences;
  }
}
