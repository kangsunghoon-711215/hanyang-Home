/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the X-Powered-By header for security
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    // Add external image domains here if needed in the future:
    // remotePatterns: [{ protocol: 'https', hostname: 'example.com' }],
  },

  // Note: Next.js App Router does not support the top-level `i18n` config option.
  // Korean locale is handled via lang="ko" on <html> in app/layout.tsx.
};

export default nextConfig;
