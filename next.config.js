const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    basePath: isProd ? '' : '',
    assetPrefix: isProd ? '' : ''
};

module.exports = nextConfig;