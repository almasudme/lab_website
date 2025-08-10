/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';
const isProd = process.env.NODE_ENV === 'production' && !!repo;

export default {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProd ? { basePath: repo, assetPrefix: repo } : {}),
};
