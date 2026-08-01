import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    watch: {
      // ignore large or externally-locked images in the public folder to avoid
      // EBUSY/watch errors on some Windows setups (can be removed later)
      ignored: ['**/public/images/**']
    }
  },
});
