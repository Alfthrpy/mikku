/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co','img.youtube.com'],
        dangerouslyAllowSVG: true // Tambahkan hostname di sini
      },
};

export default nextConfig;
