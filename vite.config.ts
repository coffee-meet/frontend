import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '.',
  plugins: [react()],
  resolve: {
    alias: { '@/': `${process.cwd()}/src/` },
  },
  server: {
    port: 3000,
    https: true,
    hmr: {
      host: process.env.VITE_BASE_URL,
      port: 3001,
      protocol: 'wss',
    },
  },
})
