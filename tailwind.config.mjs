import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom right, #FFFEED, #E2E8F0)',
        'dark-gradient': 'linear-gradient(to bottom right, #0D0804, #281405)',
        'accent-gradient': 'radial-gradient(circle, rgba(255,213,72,1) 22%, rgba(201,144,5,1) 100%)',
      },
      colors: {
        // Tu color de acento preferido. Indigo es el más cercano a los valores predeterminados de Starlight.
        accent: colors.amber,
        // Tu escala de grises preferida. Zinc es el más cercano a los valores predeterminados de Starlight.
        gray: colors.zinc,
        black: '#0C0805',
        'light-bg': '#FFFEED', // Light mode background color
        'dark-bg': '#281405',  // Dark mode background color
        'topbar-light': '#E2E8F0', // Light mode top bar color
        'topbar-dark': '#0A0704',
      },
      fontFamily: {
        // Tu fuente de texto preferida. Starlight usa una pila de fuentes del sistema de forma predeterminada.
        sans: ['"JetBrains Mono"'],
        // Tu fuente de código preferida. Starlight usa fuentes monoespaciadas del sistema de forma predeterminada.
        mono: ['"IBM Plex Mono"'],
        'archivo-black': ['"Archivo Black"', 'sans-serif'],

      },
    },
  },
  plugins: [starlightPlugin()],
  darkMode: ['class', '[data-theme="dark"]'],
};
