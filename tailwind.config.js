/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}','./lib/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['bg-blue-100','text-blue-600','bg-green-100','text-green-600','bg-purple-100','text-purple-600','bg-yellow-100','text-yellow-600','bg-red-100','text-red-600','bg-indigo-100','text-indigo-600','bg-amber-100','text-amber-600'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1e4f8f',
          '800': '#1e3a6f',
          '900': '#1e3a5f',
          '950': '#0f1d30'
},
        'accent': {
          '50': '#ecfdf5',
          '100': '#d1fae5',
          '200': '#a7f3d0',
          '300': '#6ee7b7',
          '400': '#34d399',
          '500': '#10b981',
          '600': '#059669',
          '700': '#047857',
          '800': '#065f46',
          '900': '#064e3b',
          '950': '#022c22'
},
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
