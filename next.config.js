const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/gdsc' : undefined,
    basePath: process.env.NODE_ENV === 'production' ? '/gdsc' : undefined,
};

module.exports = nextConfig;
