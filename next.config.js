/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    experimental: {
        serverComponents: true,
        serverActions: true, // Habilita Server Actions
    },
}

module.exports = nextConfig
