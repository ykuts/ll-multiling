/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Полностью отключаем оптимизацию изображений для статического хостинга
  images: {
    unoptimized: true
  },
  // Добавляем настройки для правильной работы на Netlify
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
};

export default nextConfig;
