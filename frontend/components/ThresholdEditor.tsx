type ThresholdEditorProps = {
    value: number,
    onChange: (v: number) => void;
}

export default function ThresholdEditor({ value, onChange }: ThresholdEditorProps) {
    return (
        <div className="input-group">
            <input
                type='number'
                title='Enter a number for a threshold in milliseconds'
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min={100}
            />
            <span className="input-group-text">ms</span>
        </div>
    );
}

