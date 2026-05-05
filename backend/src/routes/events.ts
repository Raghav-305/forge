import { Router } from 'express';
import { prisma } from '../db/prisma';
import { eventBus } from '../events/eventBus';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const {
      event_type,
      config_slug,
      severity,
      limit = 100,
      offset = 0,
      from_date,
      to_date
    } = req.query;

    const where: any = {};

    if (event_type) where.event_type = event_type as string;
    if (config_slug) where.config_slug = config_slug as string;
    if (severity) where.severity = severity as string;
    if (from_date) where.created_at = { gte: new Date(from_date as string) };
    if (to_date) where.created_at = { ...where.created_at, lte: new Date(to_date as string) };

    const events = await prisma.eventLog.findMany({
      where,
      orderBy: { created_at: 'desc' },
      take: Math.min(parseInt(limit as string), 500),
      skip: parseInt(offset as string)
    });

    const total = await prisma.eventLog.count({ where });

    return res.json({
      data: events,
      pagination: {
        limit: parseInt(limit as string),
        offset: parseInt(offset as string),
        total
      }
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });

  const sendEvent = (data: any) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  sendEvent({ type: 'connected', timestamp: new Date().toISOString() });

  const eventHandler = (data: any) => {
    sendEvent(data);
  };

  eventBus.on('*', eventHandler);

  const heartbeat = setInterval(() => {
    sendEvent({ type: 'heartbeat', timestamp: new Date().toISOString() });
  }, 30000);

  req.on('close', () => {
    clearInterval(heartbeat);
    eventBus.off('*', eventHandler);
  });
});

router.get('/stats', async (req, res) => {
  try {
    const { days = 7 } = req.query;

    const stats = await prisma.$queryRaw`
      SELECT 
        event_type,
        severity,
        COUNT(*) as count,
        DATE(created_at) as date
      FROM "EventLog"
      WHERE created_at > NOW() - (${parseInt(days as string)} || ' days')::INTERVAL
      GROUP BY event_type, severity, DATE(created_at)
      ORDER BY date DESC, count DESC
    `;

    const summary = await prisma.$queryRaw<any[]>`
      SELECT 
        COUNT(*) as total_events,
        COUNT(DISTINCT event_type) as unique_event_types,
        COUNT(DISTINCT config_slug) as affected_configs,
        AVG(EXTRACT(EPOCH FROM (NOW() - created_at)))::int as avg_age_seconds
      FROM "EventLog"
      WHERE created_at > NOW() - INTERVAL '24 hours'
    `;

    return res.json({
      summary: summary[0],
      timeline: stats,
      topEvents: await prisma.eventLog.groupBy({
        by: ['event_type'],
        _count: true,
        orderBy: { _count: { event_type: 'desc' } },
        take: 10
      })
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await prisma.eventLog.findUnique({
      where: { id: req.params.id }
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    return res.json(event);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete('/clear', async (req, res) => {
  try {
    const { days = 30 } = req.query;

    await prisma.$executeRaw`
      SELECT cleanup_old_logs(${parseInt(days as string)})
    `;

    eventBus.emit('events.cleared', {
      deletedOlderThan: `${days} days`,
      clearedBy: req.user?.id,
      timestamp: new Date().toISOString()
    });

    return res.json({
      success: true,
      message: `Cleared events older than ${days} days`,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
