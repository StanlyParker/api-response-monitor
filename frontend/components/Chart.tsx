export default function Chart({ data }: { data: number[] }) {
    if (!data || data.length === 0) return <div className='text-muted'>No data</div>

    const width = 400;
    const height = 80;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const len = data.length;

    const points = data
        .map((v, i) => {
            const x = (i / (len - 1 || 1)) * width;
            const y = height - ((v - min) / (max - min || 1)) * height;
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <svg width='100%' viewBox={`0 0 ${width} ${height}`}>
            <polyline fill='none' stroke='#06efd' strokeWidth={2} points={points} />
        </svg>
    );
}