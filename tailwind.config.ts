import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'brand-blue': {
        light: '#E0F7FA',
        DEFAULT: '#4DD0E1',
        dark: '#00ACC1',
      },
      'brand-gray': {
        light: '#F5F5F5',
        DEFAULT: '#BDBDBD',
        dark: '#616161',
      },
      ...require('tailwindcss/colors'),
    },
  },
  plugins: [],
}
export default config