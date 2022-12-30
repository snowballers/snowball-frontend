/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    KAKAO_AUTH_URL: process.env.KAKAO_AUTH_URL,
    GOOGLE_AUTH_URL: process.env.GOOGLE_AUTH_URL,
    OAUTH_REDIRECT_URI: process.env.OAUTH_REDIRECT_URI,
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
  },
};

module.exports = nextConfig;
