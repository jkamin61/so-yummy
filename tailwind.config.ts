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
                whitish: {
                    DEFAULT: '#FAFAFA',
                },
                white: {
                    DEFAULT: '#ffffff',
                    light: '#ffffff',
                    dark: '#ffffff',
                },
                asparagus: {
                    DEFAULT: '#8BAA36',
                    light: '#8BAA36',
                    dark: '#8BAA36',
                },
                fern: {
                    DEFAULT: '#EBF3D4',
                    light: '#EBF3D4',
                    dark: '#EBF3D4',
                },
                charcoal: {
                    DEFAULT: '#22252A',
                    light: '#22252A',
                    dark: '#22252A',
                },
                darkGray: {
                    DEFAULT: '#23262A',
                    light: '#23262A',
                    dark: '#23262A',
                },
                shadowNavy: {
                    DEFAULT: '#1E1F28',
                    light: '#2A2C36',
                    dark: '#1E1F28',
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                'poppins-semibold': ['Poppins Semibold', 'sans-serif'],
            },
            rotate: {
                270: '270deg',
                65: '65deg',
                220: '220deg',
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            blur: {
                xs: '2px',
            },
            backgroundImage: {
                'salad-bowl': 'url("/salad.png")',
                'spinach-bg': 'url("/bg-layer.jpg")',
                'ronise-daluz': 'url("/ronise-daluz.png")',
                'user': 'url("/user-01.svg")',
                'mail-01': 'url("/mail-01.svg")',
                'lock-02': 'url("/lock-02.svg")',
            },
            fontSize: {
                xss: '0.625rem',
            },
        },
    },
    plugins: [],
}
export default config
