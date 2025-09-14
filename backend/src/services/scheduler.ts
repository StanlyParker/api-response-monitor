import cron from 'node-cron';
import { config } from '../config/index.js';
import { db } from '../store/pgAdapter.js';
import { ping } from './pingService.js';
import { logger } from '../utils/logger.js';

export function startScheduler() {
  cron.schedule(config.pollInterval, async () => {
    const monitors = await db.getMonitors();
    for (const monitor of monitors) {
      const result = await ping(monitor.url);
      await db.saveMetric(monitor.id, result.duration, result.success);
      logger.info(`Monitor ${monitor.url} responded in ${result.duration}ms`);
    }
  });
}
