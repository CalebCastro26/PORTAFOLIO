/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
