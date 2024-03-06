import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import {nodeResolve} from '@rollup/plugin-node-resolve'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),nodeResolve()],
  build: {
    rollupOptions: {
      external: ['bootstrap/dist/js/bootstrap.bundle.min'],
    },
  },
});
