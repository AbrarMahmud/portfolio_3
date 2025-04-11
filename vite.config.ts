import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/portfolio/', // Update this to match your repository name

  base: '/portfolio_3/', // Update this to match your repository name

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});