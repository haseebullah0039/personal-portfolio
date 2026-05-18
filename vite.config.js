import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'motion-vendor';
            }

            if (id.includes('react')) {
              return 'react-vendor';
            }

            return 'vendor';
          }

          if (id.includes("/src/data/portfolio") || id.includes("\\src\\data\\portfolio")) {
            return 'portfolio-data';
          }

          return undefined;
        },
      },
    },
  },
});
