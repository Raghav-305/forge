import { Router } from 'express';
import multer from 'multer';
import { prisma } from '../db/prisma.js';
import { CSVService } from '../services/csvService.js';
import { eventBus } from '../events/eventBus.js';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

router.post('/analyze', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { rows, columns } = await CSVService.parseCSV(req.file.buffer);
    const { configSlug, entitySlug } = req.body;
    let targetFields: any[] = [];

    if (configSlug && entitySlug) {
      const config = await prisma.appConfig.findFirst({
        where: { slug: configSlug, is_active: true }
      });

      if (config) {
        const appConfig = config.config as any;
        const entity = appConfig.entities?.find((e: any) => e.slug === entitySlug);
        if (entity) {
          targetFields = entity.fields || [];
        }
      }
    }

    const autoMappings = targetFields.length > 0 ? CSVService.autoMapFields(columns, targetFields) : [];

    return res.json({
      success: true,
      preview: rows.slice(0, 10),
      totalRows: rows.length,
      columns,
      autoMappings,
      targetFields: targetFields.map((f: any) => ({ name: f.name, type: f.type, required: f.required })),
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.post('/import', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { configSlug, entitySlug, mapping } = req.body;

    if (!configSlug || !entitySlug) {
      return res.status(400).json({ error: 'Missing configSlug or entitySlug' });
    }

    const config = await prisma.appConfig.findFirst({
      where: { slug: configSlug, is_active: true }
    });

    if (!config) {
      return res.status(404).json({ error: 'Config not found' });
    }

    const { rows } = await CSVService.parseCSV(req.file.buffer);

    const importRecord = await prisma.cSVImport.create({
      data: {
        config_slug: configSlug,
        config_version: config.version,
        entity_slug: entitySlug,
        filename: req.file.originalname,
        mapping: JSON.parse(mapping),
        status: 'processing',
        total_rows: rows.length,
        success_rows: 0,
        error_rows: 0,
        created_by: req.user?.id
      }
    });

    const result = await CSVService.processImport(
      rows,
      JSON.parse(mapping),
      configSlug,
      config.version,
      entitySlug,
      req.user?.id
    );

    await prisma.cSVImport.update({
      where: { id: importRecord.id },
      data: {
        status: result.errors > 0 ? 'completed_with_errors' : 'completed',
        success_rows: result.success,
        error_rows: result.errors,
        errors: result.errorDetails,
        completed_at: new Date()
      }
    });

    eventBus.emit('csv.import.completed', {
      configSlug,
      entitySlug,
      total: rows.length,
      success: result.success,
      errors: result.errors,
      importId: importRecord.id,
      userId: req.user?.id
    });

    return res.json({
      success: true,
      importId: importRecord.id,
      total: rows.length,
      successCount: result.success,
      errorCount: result.errors,
      errorDetails: result.errorDetails.slice(0, 20),
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/:configSlug/imports', async (req, res) => {
  try {
    const imports = await prisma.cSVImport.findMany({
      where: { config_slug: req.params.configSlug },
      orderBy: { created_at: 'desc' },
      take: 50
    });

    return res.json(imports);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/import/:id', async (req, res) => {
  try {
    const importRecord = await prisma.cSVImport.findUnique({
      where: { id: req.params.id }
    });

    if (!importRecord) {
      return res.status(404).json({ error: 'Import not found' });
    }

    return res.json(importRecord);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
