import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api';

export type Monitor = { id: string; url: string; threshold: number };
export type Metric = { duration: number; success: boolean; createdAt: string };

export async function getMonitors(): Promise<Monitor[]> {
    const res = await axios.get(`${API_BASE}/monitors`);
    return res.data;
}

export async function getMonitor(id: string): Promise<Monitor> {
    const res = await axios.get(`${API_BASE}/monitors/${id}`);
    return res.data;
}

export async function createMonitor(payload: { url: string; threshold: number }): Promise<Monitor> {
    const res = await axios.post(`${API_BASE}/monitors`, payload);
    return res.data;
}

export async function getMetrics(monitorId: string): Promise<Metric[]> {
    const res = await axios.get(`${API_BASE}/metrics/${monitorId}`);
    return res.data;
}

