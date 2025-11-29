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
        'light-bg': '#F4EFE6',
        'earth-beige': '#E6D8C4',
        'warm-tan': '#C8AF8E',
        'clay-brown': '#A6784F',
        'forest-green': '#1B4332',
        'dark-olive': '#3A5A40',
        'section-black': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'Source Sans Pro', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
export default config

