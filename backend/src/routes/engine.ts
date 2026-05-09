import { Router } from 'express';
import { Engine } from '../engine/Engine.js';
import { prisma } from '../db/prisma.js';
import { eventBus } from '../events/eventBus.js';
import { EngineError } from '../engine/EngineError.js';
import { VersionManager } from '../config/versionManager.js';

const router = Router();

router.post('/', async (req, res) => {
  const startTime = Date.now();

  try {
    const {
      configSlug,
      action,
      entity,
      data,
      id,
      filters,
      search,
      skip,
      take,
      safeMode = false
    } = req.body;

    if (!configSlug) {
      return res.status(400).json({
        error: 'Missing required field: configSlug',
        timestamp: new Date().toISOString()
      });
    }

    if (!action) {
      return res.status(400).json({
        error: 'Missing required field: action',
        timestamp: new Date().toISOString()
      });
    }

    const configRecord = await prisma.appConfig.findFirst({
      where: {
        slug: configSlug,
        is_active: true
      }
    });

    if (!configRecord) {
      const anyVersion = await prisma.appConfig.findFirst({ where: { slug: configSlug } });

      if (anyVersion) {
        return res.status(404).json({
          error: `No active version found for config ${configSlug}`,
          availableVersions: await VersionManager.getVersionHistory(configSlug),
          suggestion: 'Activate a version or create a new one'
        });
      }

      return res.status(404).json({
        error: `Config ${configSlug} not found`,
        timestamp: new Date().toISOString()
      });
    }

    const engine = new Engine(configRecord.config, safeMode);
    const events: any[] = [];
    engine.on('step-completed', (data) => {
      events.push(data);
    });

    const engineReq = {
      user: req.user,
      body: {
        configSlug,
        action,
        entity,
        data,
        id,
        filters,
        search,
        skip,
        take,
        timestamp: new Date().toISOString()
      },
      headers: {
        authorization: req.headers.authorization,
        'user-agent': req.headers['user-agent'],
        'x-forwarded-for': req.headers['x-forwarded-for']
      },
      ip: req.ip
    };

    const result = await engine.run(engineReq);
    const duration = Date.now() - startTime;

    eventBus.emit('engine.execution', {
      configSlug,
      action,
      entity,
      userId: req.user?.id,
      duration,
      success: true,
      safeMode
    });

    return res.json({
      success: true,
      data: result.data,
      warnings: result.warnings || [],
      safeMode: result.safeMode || false,
      metadata: {
        duration,
        configVersion: configRecord.version,
        steps: events.map(e => e.step),
        timestamp: new Date().toISOString()
      }
    });
  } catch (error: any) {
    const duration = Date.now() - startTime;

    if (error instanceof EngineError) {
      const firstErrorCode = error.errors?.[0]?.code;
      const status = firstErrorCode === 'UNAUTHORIZED'
        ? 401
        : firstErrorCode === 'FORBIDDEN'
          ? 403
          : 500;

      eventBus.emit('engine.error', {
        configSlug: req.body.configSlug,
        action: req.body.action,
        userId: req.user?.id,
        duration,
        errors: error.errors
      });

      return res.status(status).json({
        success: false,
        error: error.errors?.[0]?.message || 'Engine error',
        errors: error.errors,
        metadata: error.metadata,
        timestamp: new Date().toISOString()
      });
    }

    eventBus.emit('engine.error', {
      configSlug: req.body.configSlug,
      action: req.body.action,
      userId: req.user?.id,
      duration,
      error: error.message
    });

    return res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

router.get('/status', async (req, res) => {
  res.json({
    status: 'healthy',
    version: '2.0.0',
    features: {
      safeMode: true,
      versioning: true,
      rollback: true,
      csvImport: true,
      eventBus: true
    },
    timestamp: new Date().toISOString()
  });
});

export default router;
