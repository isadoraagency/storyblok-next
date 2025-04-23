const path = require("path");

const nextConfig = {
  // output: "standalone",
  webpack: (config, {isServer}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 10,
        minSize: 30000,
      };
    }
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=60, stale-while-revalidate" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;