import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
