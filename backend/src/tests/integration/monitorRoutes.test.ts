import request from 'supertest';
import app from '../../app.js';
import { Monitor } from '../../../src/store/pgAdapter.js';

describe('Monitor Routes', () => {
    let createdMonitor: Monitor;
    it('should create a monitor', async () => {
        const payload = { url: 'http://test.com', threshold: 500 };
        const res = await request(app).post('/api/monitors').send(payload);

        expect(res.status).toBe(201);
        expect(res.body.url).toBe('http://test.com');
        expect(res.body).toMatchObject(payload);
        expect(typeof res.body.id).toBe('string');

        createdMonitor = res.body;
    });

    it('should get monitors list', async () => {
        const res = await request(app).get('/api/monitors');
        expect(res.status).toBe(200);
        const monitors = res.body as Monitor[];
        expect(Array.isArray(monitors)).toBe(true);
        expect(monitors.some((m: Monitor) => m.id === createdMonitor.id)).toBe(true);
    });
});