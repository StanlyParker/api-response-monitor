import { useState } from 'react';
import { createMonitor } from '../lib/api';
import { useRouter } from 'next/router';
import styles from './settings.module.css';

export default function SettingsPage() {
    const [url, setUrl] = useState('');
    const [threshold, setThreshold] = useState(1000);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        try {
            await createMonitor({ url, threshold } as { url: string; threshold: number });
            router.push('/');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Failed to create monitor');
            }
            
        }
    }
    return (
        <main className='container py-5'>
            <h1>Add Monitor</h1>
            <form onSubmit={onSubmit} className={`mt-4 ${styles.formContainer}`}>
                <div className='mb-3'>
                    <label htmlFor='monitor-url' className='form-label'>URL</label>
                    <input 
                        id='monitor-url'
                        className='form-control'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        placeholder='https://example.com'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Alert Threshold (ms)</label>
                    <input 
                        type='number'
                        id='alert-threshold'
                        className='form-control'
                        value={threshold}
                        onChange={(e) => setThreshold(Number(e.target.value))}
                        required
                        min={100}
                        placeholder='1000'
                    />
                </div>
                {error && <div className='alert alert-danger'>{error}</div>}
                <button className='btn btn-primary' type='submit'>
                    Create Monitor
                </button>
            </form>
        </main>
    );
}