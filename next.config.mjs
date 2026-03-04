/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/eventos/kart-rental-2026",
        destination: "/karting/kartingrentalexperience",
        permanent: true,
      },
      {
        source: "/karting/kart-rental-2026",
        destination: "/karting/kartingrentalexperience",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
