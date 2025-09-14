import { logger } from '../utils/logger.js';
export async function checkThreshold(monitor, duration) {
    if (duration > monitor.threshold) {
        logger.warn(`⚠️ Threshold exceeded for monitor ${monitor.id}: ${duration}ms`);
    }
}
