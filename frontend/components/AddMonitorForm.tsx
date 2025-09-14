import { useState } from 'react';

export default function AddMonitorForm({ onCreate }: { onCreate: (v: { url: string; threshold: number } ) => void }) {
    const [url, setUrl] = useState('');
    const [threshold, setThreshold] = useState(1000);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        onCreate({ url, threshold });
    }

    return (
        <form onSubmit={submit}>
            <div className='mb-3'>
                <label className='form-label'>URL</label>
                <input className='form-control' title='Enter the full URL to monitor' value={url} onChange={(e) => setUrl(e.target.value)} placeholder='http://example.com' required />    
            </div>
            <div className='mb-3'>
                <label className='form-label'>Threshold (ms)</label>
                <input
                    title='Set the response time threshold in milliseconds'
                    type='number'
                    className='form-control'
                    value={threshold}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    placeholder='1000'
                />
            </div>
            <button className='btn btn-primary'>Create</button>
        </form>
    );
}