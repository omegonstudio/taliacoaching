import { defineNitroConfig } from "nitro/config";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNitroConfig({
  // Override the default cloudflare preset from @lovable.dev/vite-tanstack-config
  preset: "vercel",

  // Output configuration for Vercel deployment
  outDir: resolve(__dirname, ".vercel/output"),

  // Build output directories
  rollupConfig: {
    output: {
      dir: resolve(__dirname, ".vercel/output/functions/__server.func"),
    },
  },
});
