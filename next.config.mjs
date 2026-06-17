/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't leak the framework in response headers.
  poweredByHeader: false,
  // Self-contained build for the Docker image (produces .next/standalone/server.js).
  output: 'standalone',
  // Landing site — lint is run separately; don't block production builds on it.
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
