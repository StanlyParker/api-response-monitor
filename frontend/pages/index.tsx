import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getMonitors }from '../lib/api';
import MonitorCard from '../components/MonitorCard';

type Monitor = { id: string; url: string; threshold: number };

export default function Home({ monitors }: { monitors: Monitor[] }) {
    return (
        <main className='container py-5'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1>API Repsonse Monitor</h1>
                <Link href='/settings' className='btn btn-primary'>
                </Link>
            </div>

            <div className='row g-3'>
                {monitors.map((m) => (
                    <div key={m.id} className='col-md-6 col-lg-4'>
                        <MonitorCard monitor={m} />
                    </div>
                ))}
                {monitors.length === 0 && <p className='text-muted'>No monitors yet. Add one in Settings.</p>}
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const monitors = await getMonitors();
        return { props: { monitors } };
    } catch {
        return { props: { monitors: [] } };
    }
};

