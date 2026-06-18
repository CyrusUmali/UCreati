import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/send': {
        target: 'https://api.resend.com',
        changeOrigin: true,
        rewrite: (path) => '/emails',
        headers: {
          'Authorization': 'Bearer re_D3EoZSYm_NaVig8JNRtNEZmYffF3u7Xw6',
        },
      },
    },
  },
})