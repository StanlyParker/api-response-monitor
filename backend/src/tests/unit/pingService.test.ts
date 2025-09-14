import { ping } from '../../services/pingService.js';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: 'ok' }),
}));

describe('ping service', () => {
  it('should return success and duration', async () => {
    const result = await ping('http://example.com');
    expect(result.success).toBe(true);
    expect(result.duration).toBeGreaterThanOrEqual(0);
  });
});
