/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.genshin.dev",
        // hostname: ["api.genshin.dev", "genshinlab.com"],
      },
        {
          hostname: "www.genshinlab.com",
        },
    ],
  },
};

module.exports = nextConfig;
