/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "siddhwebsitestorage.blob.core.windows.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "siddhpersonalwebsite.blob.core.windows.net",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
