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
    proxy: {
      '/api': {
        target: process.env.SERVER_EC2_URL,
        changeOrigin: true,
      },
    },
    // port: 3000,
    // https: true,
    // hmr: {
    //   host: process.env.VITE_BASE_URL,
    //   port: 3001,
    //   protocol: 'wss',
    // },
  },
})
