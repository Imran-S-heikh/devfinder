import { svgHandler } from "./loaders.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack(config) {
    svgHandler(config);
    return config;
  },
};

export default nextConfig;
