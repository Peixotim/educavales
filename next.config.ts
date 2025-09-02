import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Este você já tinha
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com',  // <-- ADICIONE ESTE NOVO BLOCO
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
