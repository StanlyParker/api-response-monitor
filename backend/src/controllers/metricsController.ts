import { Request, Response } from 'express';
import * as monitorService from '../services/monitorService.js';

export async function getMetricsByMonitor(req: Request, res: Response) {
  const { monitorId } = req.params;
  const metrics = await monitorService.getMetrics(monitorId);
  res.json(metrics);
}
