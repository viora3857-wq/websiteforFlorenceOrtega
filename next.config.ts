import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // gera site estático em /out (hospeda em qualquer servidor)
  images: { unoptimized: true },
};

export default nextConfig;
