import { db } from '../store/pgAdapter.js';
export async function getAll() {
    return db.getMonitors();
}
export async function create(data) {
    if (!data.url)
        throw new Error('URL is required');
    return db.createMonitor(data);
}
export async function getById(id) {
    return db.getMonitorById(id);
}
export async function getMetrics(monitorId) {
    return db.getMetricsByMonitor(monitorId);
}
