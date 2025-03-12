const nextConfig = {
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
