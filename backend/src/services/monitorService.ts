import { db } from '../store/pgAdapter.js';

export async function getAll() {
  return db.getMonitors();
}

export async function create(data: { url: string; threshold: number }) {
  if (!data.url) throw new Error('URL is required');
  return db.createMonitor(data);
}

export async function getById(id: string) {
  return db.getMonitorById(id);
}

export async function getMetrics(monitorId: string) {
  return db.getMetricsByMonitor(monitorId);
}
