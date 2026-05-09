import { Router } from 'express';
import { prisma } from '../db/prisma.js';
import { normalizeConfig } from '../config/normalizer.js';
import { VersionManager } from '../config/versionManager.js';
import { eventBus } from '../events/eventBus.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const limit = Math.min(Math.max(parseInt(String(req.query.limit || 20)), 1), 100);
    const offset = Math.max(parseInt(String(req.query.offset || 0)), 0);

    const configs = await prisma.appConfig.findMany({
      where: {
        is_active: true
      },
      select: {
        id: true,
        name: true,
        slug: true,
        version: true,
        description: true,
        is_active: true,
        created_at: true,
        updated_at: true,
        config: true
      },
      orderBy: { created_at: 'desc' },
      take: limit,
      skip: offset
    });

    const total = await prisma.appConfig.count({ where: { is_active: true } });

    return res.json({
      data: configs.map((item: any) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        version: item.version,
        description: item.description,
        is_active: item.is_active,
        created_at: item.created_at,
        updated_at: item.updated_at,
        pages: (item.config as any)?.pages ?? []
      })),
      pagination: {
        limit,
        offset,
        total,
        hasMore: offset + limit < total
      }
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const slugOrId = req.params.slug;
    const config = await prisma.appConfig.findFirst({
      where: {
        is_active: true,
        OR: [
          { slug: slugOrId },
          { id: slugOrId }
        ]
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        version: true,
        config: true,
        is_active: true,
        created_by: true,
        created_at: true,
        updated_at: true,
        previous_version_id: true
      }
    });

    if (!config) {
      return res.status(404).json({ error: 'Config not found' });
    }

    const includeHistory = req.query.includeHistory === 'true';
    const history = includeHistory ? await VersionManager.getVersionHistory(config.slug) : undefined;

    return res.json({
      ...config,
      ...(history ? { history } : {})
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { config: normalizedConfig, repairs } = normalizeConfig(req.body);

    const result = await VersionManager.createVersion(
      normalizedConfig.slug,
      normalizedConfig,
      req.user?.id
    );

    eventBus.emit('config.created', {
      slug: normalizedConfig.slug,
      version: normalizedConfig.version,
      repairs,
      createdBy: req.user?.id
    });

    return res.json({
      success: true,
      config: result.active,
      repairs,
      version: result.history.version,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.post('/:slug/rollback/:version', async (req, res) => {
  try {
    const { slug, version } = req.params;
    const result = await VersionManager.rollback(slug, version, req.user?.id);

    eventBus.emit('config.rolledback', {
      slug,
      fromVersion: version,
      toVersion: result.rollback.version,
      rolledBackBy: req.user?.id
    });

    return res.json({
      success: true,
      activeConfig: result.active,
      rollbackVersion: result.rollback,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/:slug/versions', async (req, res) => {
  try {
    const history = await VersionManager.getVersionHistory(req.params.slug);
    return res.json(history);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/:slug/compare/:v1/:v2', async (req, res) => {
  try {
    const { slug, v1, v2 } = req.params;
    const comparison = await VersionManager.compareVersions(slug, v1, v2);
    return res.json(comparison);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete('/:slug', async (req, res) => {
  try {
    await prisma.appConfig.update({
      where: { slug: req.params.slug },
      data: { is_active: false }
    });

    eventBus.emit('config.deleted', {
      slug: req.params.slug,
      deletedBy: req.user?.id
    });

    return res.json({
      success: true,
      message: 'Config deactivated',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
