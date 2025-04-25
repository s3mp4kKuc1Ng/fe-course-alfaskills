/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['api.alfaskills-academy.com'], // Add the domain for your API images
    },
    env: {
      // Environment variables that will be used in the application
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
  };
  
  module.exports = nextConfig;