/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['cdn2.downdetector.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
