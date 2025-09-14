import * as monitorService from '../services/monitorService.js';
export async function getMetricsByMonitor(req, res) {
    const { monitorId } = req.params;
    const metrics = await monitorService.getMetrics(monitorId);
    res.json(metrics);
}
