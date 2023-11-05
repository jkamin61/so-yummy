import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f3c614',
                    light: '#f5d349',
                    dark: '#f2b900',
                },
                secondary: {
                    DEFAULT: '#f2f2f2',
                    light: '#f5f5f5',
                    dark: '#e5e5e5',
                },
                accent: {
                    DEFAULT: '#e5e5e5',
                    light: '#f5f5f5',
                    dark: '#d5d5d5',
                },
                black: {
                    DEFAULT: '#000000',
                    light: '#333333',
                    dark: '#000000',
                },
                white: {
                    DEFAULT: '#ffffff',
                    light: '#ffffff',
                    dark: '#ffffff',
                },
                greeme: {
                    DEFAULT: '#8BAA36',
                    light: '#8BAA36',
                    dark: '#8BAA36',
                },
            }
        },
    },
    plugins: [],
}
export default config
