import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/features/localeSwitcher/config/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'],
  },
};

export default withNextIntl(nextConfig);
