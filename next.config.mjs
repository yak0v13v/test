/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://d2norla3tyc4cn.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
