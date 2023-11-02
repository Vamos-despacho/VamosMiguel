/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/maintenance', // Redirige al mantenimiento en la página de inicio
                permanent: false, // Esto indica que el redireccionamiento no es permanente
            },
            // Agrega más redirecciones si es necesario
        ];
    }


}

module.exports = nextConfig
