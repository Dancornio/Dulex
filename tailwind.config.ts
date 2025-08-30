// tailwind.config.ts
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
        'brand-blue-light': '#E0F7FA',
        'brand-blue': '#4DD0E1',
        'brand-blue-dark': '#00ACC1',
        'brand-gray-light': '#F5F5F5',
        'brand-gray': '#BDBDBD',
        'brand-gray-dark': '#616161',
      },
    },
  },
  plugins: [],
}
export default config