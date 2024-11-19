import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // 'media' veya 'class' olarak ayarlanabilir
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      fontSize: {
        '7xl': '13.052rem',
      },
      colors: {
        mycolor: '#FC4100',
        mycolor2: '#FFC55A',
        mycolor3: '#00215E',
        mycolor4: '#2C4E80',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
