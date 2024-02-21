/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    REACT_APP_DEEZER_KEY: process.env.REACT_APP_DEEZER_KEY,
  }
}

module.exports = nextConfig
