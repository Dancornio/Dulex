import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          light: '#E0F7FA', // Azul bem claro para fundos
          DEFAULT: '#4DD0E1', // Azul principal
          dark: '#00ACC1',   // Azul para hover/foco
        },
        'brand-gray': {
          light: '#F5F5F5',
          DEFAULT: '#BDBDBD',
          dark: '#616161',
        },
      },
    },
  },
  plugins: [],
}
export default config