import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true
  },
  esbuild: {
    jsx: "automatic"
  }
});
