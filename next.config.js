/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "kb.rspca.org.au",
      "hips.hearstapps.com"
    ],
  },
};

module.exports = nextConfig;
