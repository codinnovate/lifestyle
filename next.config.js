const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true, // Ignores ESLint errors during build
    },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/himago/image/upload/**", // Adjust this if needed
      },
    ],
  },
};

module.exports = nextConfig;
