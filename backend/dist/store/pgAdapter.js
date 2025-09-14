const monitors = [];
const metrics = [];
export const db = {
    async getMonitors() {
        return monitors;
    },
    async createMonitor(data) {
        const monitor = { id: String(monitors.length + 1), ...data };
        monitors.push(monitor);
        return monitor;
    },
    async getMonitorById(id) {
        return monitors.find((m) => m.id === id);
    },
    async saveMetric(monitorId, duration, success) {
        metrics.push({ monitorId, duration, success, createdAt: new Date() });
    },
    async getMetricsByMonitor(monitorId) {
        return metrics.filter((m) => m.monitorId === monitorId);
    },
};
