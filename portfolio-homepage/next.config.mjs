import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This project lives in a subdirectory of a larger personal repo that
  // has its own root package-lock.json (an unrelated sibling project) —
  // pin the workspace root so Next.js doesn't try to infer it.
  outputFileTracingRoot: __dirname,
  eslint: {
    // Linting is run separately via `npm run lint`.
    ignoreDuringBuilds: false,
  },
  images: {
    // Only the Kemira client logo is SVG; it's a trusted local asset.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
