/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co'],
        dangerouslyAllowSVG: true // Tambahkan hostname di sini
      },
};

export default nextConfig;
