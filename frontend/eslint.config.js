import nextPlugin from '@next/eslint-plugin-next';
import next from 'next';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    },
];