/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cloudflare-ipfs.com",
            },
            {
                protocol: "https",
                hostname: "icongr.am",
            },
            {
                protocol: "https",
                hostname: "1mediasoft.net",
            },
        ],
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: true,
    pageExtensions: ['jsx', 'js'],
    webpack: (config) => {
        config.watchOptions = {
            aggregateTimeout: 300,
            poll: 1000,
        };
        return config;
    },
};

export default nextConfig;
