import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tambahan kode ini agar Next.js tahu alamat foldernya
  basePath: '/Portofolio',
  assetPrefix: '/Portofolio',
};

export default nextConfig;