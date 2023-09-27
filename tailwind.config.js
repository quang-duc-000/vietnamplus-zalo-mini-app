/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: '#BB0D04'
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['Roboto', 'Segoe UI Emoji', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', 'Segoe UI Emoji', ...defaultTheme.fontFamily.mono],
        normal: ['Roboto', 'Segoe UI Emoji', ...defaultTheme.fontFamily.mono]
      },
    },
  },
};
