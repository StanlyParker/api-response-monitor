import axios from 'axios';
import { logger } from '../utils/logger.js';
export async function ping(url) {
    const start = Date.now();
    try {
        await axios.get(url);
        const duration = Date.now() - start;
        return { success: true, duration };
    }
    catch (error) {
        const duration = Date.now() - start;
        logger.error(`Ping failed for ${url}: ${error}`);
        return { success: false, duration };
    }
}
