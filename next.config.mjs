import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "@onlook/nextjs",
        {
          root: path.resolve("."),
        },
      ],
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*", // Apply to all routes
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
