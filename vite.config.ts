import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api':{
        target:"http://127.0.0.1:8899/v1",
        changeOrigin: true, // 是否改变源地址
        secure: false, // 是否支持https
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      }
    }
  }
})
