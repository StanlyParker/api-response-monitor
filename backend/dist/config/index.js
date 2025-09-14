export const config = {
    db: {
        connectionString: process.env.DATABASE_URL || 'postgres://user:pass@http://localhost:5432/apimonitor',
    },
    pollInterval: process.env.POLL_INTERVAL || '*/5 * * * *',
};
