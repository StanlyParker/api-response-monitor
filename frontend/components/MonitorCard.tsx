import Link from 'next/link';

type Props = { monitor: { id: string; url: string; threshold: number } };
export default function MonitorCard({ monitor }: Props) {
    const exampleLatencies = [120, 200, 95, 300, 450, 180];
    const last = exampleLatencies[exampleLatencies.length - 1];

    return (
        <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
                <h5 className='card-title text-truncate'>{monitor.url}</h5>
                <p className='card-text mb-2'>Threshold: {monitor.threshold} ms</p>
                <div className='mb-3'>
                    <small className='text-muted'>Last: {last} ms</small>
                </div>
                <div className='mt-auto d-flex justify-content-between'>
                    <Link href={`/monitors/${monitor.id}`} className='btn btn-outline-primary btn-sm'>
                        View
                    </Link>
                    <button className='btn btn-outline-secondary btn-sm' disabled>
                        Pause
                    </button>
                </div>
            </div>
        </div>
    );
}