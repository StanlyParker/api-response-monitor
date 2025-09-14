import { screen, render } from '@testing-library/react';
import MonitorCard from '../components/MonitorCard';

describe('MonitorCard', () => {
    it('renders monitor basic info', () => {
        const monitor = { id: '1', url: 'https://example.com', threshold: 500 };
        render(<MonitorCard monitor={monitor} />);
        expect(screen.getByText(/example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/Threshold/i)).toBeInTheDocument();
    });
});
