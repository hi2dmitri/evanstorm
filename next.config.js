/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com/evanstorm.net']
    },
}

module.exports = nextConfig
