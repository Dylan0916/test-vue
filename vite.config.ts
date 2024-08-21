import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: './https/localhost-key.pem',
      cert: './https/localhost.pem',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5678', // 这里是接口地址
        changeOrigin: true,
        cookiePathRewrite: {
          '*': '/', // 将所有 `Domain` 重写为空字符串，即使用请求域
        },
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
