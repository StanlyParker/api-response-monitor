import express from 'express';
import { getMetricsByMonitor } from '../controllers/metricsController.js';
const router = express.Router();

router.get('/:monitorId', getMetricsByMonitor);

export default router;
