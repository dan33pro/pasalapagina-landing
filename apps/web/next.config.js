const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  env: {
    API_URL: process.env.API_URL,
    API_VERSION: process.env.API_VERSION,
    API_KEY: process.env.API_KEY,
  },
};

const dotenv = require('dotenv');
dotenv.config();

module.exports = nextConfig;