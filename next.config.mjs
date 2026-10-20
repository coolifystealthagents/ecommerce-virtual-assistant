/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us; connect-src 'self' https://acrtracking.stealthagents.us; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src https://go.oncehub.com; upgrade-insecure-requests" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
  async redirects() { return [{ source: '/:path*', has: [{ type: 'host', value: 'www.ecommercevirtualassistant.com' }], destination: 'https://ecommercevirtualassistant.com/:path*', permanent: true }]; },
  async headers() { return [{ source: '/:path*', headers: securityHeaders }]; },
};
export default nextConfig;
