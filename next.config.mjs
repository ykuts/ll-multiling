import { default as i18nConfig } from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    unoptimized: true
  },
  
  trailingSlash: true,
  i18n: i18nConfig.i18n,
};

export default nextConfig;