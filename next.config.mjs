/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
};

export default nextConfig;
