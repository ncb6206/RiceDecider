import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        rose: {
          700: '#D53330',
          600: '#E43D31F7',
          500: '#E14E4B',
          400: '#D96E6E',
          300: '#E69696',
          200: '#FACACF',
          100: '#FDEAED',
        },
        lime: {
          500: '#D6EE23',
          400: '#E4F66E',
          300: '#ECF999',
          200: '#F4FAC2',
          100: '#FBFEE7',
        },
        pink: {
          300: '#FFC3D8',
          200: '#FCE9E9',
        },
        sky: {
          300: '#A0DCFF',
          200: '#DDF5FF',
        },
        green: {
          200: '#D5F5D4',
        },
        Amber: {
          100: '#F7FCD3',
        },
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
      SBAggro: ['SBAggro'],
    },
  },
  plugins: [],
};
export default config;
