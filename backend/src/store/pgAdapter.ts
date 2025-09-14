export type Monitor = { id: string; url: string; threshold: number };
type Metric = { monitorId: string; duration: number; success: boolean; createdAt: Date };

const monitors: Monitor[] = [];
const metrics: Metric[] = [];

export const db = {
  async getMonitors() {
    return monitors;
  },
  async createMonitor(data: { url: string; threshold: number }) {
    const monitor: Monitor = { id: String(monitors.length + 1), ...data };
    monitors.push(monitor);
    return monitor;
  },
  async getMonitorById(id: string) {
    return monitors.find((m) => m.id === id);
  },
  async saveMetric(monitorId: string, duration: number, success: boolean) {
    metrics.push({ monitorId, duration, success, createdAt: new Date() });
  },
  async getMetricsByMonitor(monitorId: string) {
    return metrics.filter((m) => m.monitorId === monitorId);
  },
};
