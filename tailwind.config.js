module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  content: ['./src/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
