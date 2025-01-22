/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true, // Optional, but recommended for static export
    distDir: 'dist', // Change the output directory to 'dist'
    images: {
        unoptimized: true, // Disable Image Optimization for static export
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/gdsc' : undefined,
    basePath: process.env.NODE_ENV === 'production' ? '/gdsc' : undefined,
};

module.exports = nextConfig;
