import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getMonitor, getMetrics } from '../../lib/api';
import Chart from '../../components/Chart';
import Link from 'next/link';

type Monitor = { id: string; url: string; threshold: number };
type Metric = { duration: number; success: boolean; createdAt: string };

export default function MonitorDetail() {
    const router = useRouter();
    const { id } = router.query as { id?: string };
    const [monitor, setMonitor] = useState<Monitor | null>(null);
    const [metrics, setMetrics] = useState<Metric[]>([]);

    useEffect(() => {
        if (!id) return;
        getMonitor(id).then(setMonitor).catch(() => null);
        getMetrics(id).then(setMetrics).catch(() => []);
    }, [id]);

    return (
        <main className='container py-5'>
            <Link href='/' className='btn btn-link mb-3'>
                 ← Back
            </Link>
            {monitor ? (
                <>
                <h2>{monitor.url}</h2>
                <p>Alert threshold: {monitor.threshold} ms</p>
                <div className='mt-4'>
                    <h5>Recent response times</h5>
                    <Chart data={metrics.map((m) => m.duration)} />
                </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );  
}