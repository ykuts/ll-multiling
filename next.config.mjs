/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // Полностью отключаем оптимизацию изображений для Netlify
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js'
  }
};

export default nextConfig;
