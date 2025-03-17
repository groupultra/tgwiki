/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "@tailwindcss/postcss": {}, // ✅ 这里替换原来的 `tailwindcss`
    autoprefixer: {},
  },
};
export default config;
