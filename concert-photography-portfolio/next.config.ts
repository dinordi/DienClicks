import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["api.minio.dinordi.nl", "minio.dinordi.nl", "192.168.1.207"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.minio.dinordi.nl",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https", 
        hostname: "minio.dinordi.nl",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.207",
        port: "9199",
        pathname: "/**",
      },
    ],
  },
  // Enable experimental features for better Docker performance
  experimental: {
    serverComponentsExternalPackages: ["minio"],
  },
};

export default nextConfig;
