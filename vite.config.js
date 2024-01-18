import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  rollupOptions: {
    output: {
      // 使用你的环境变量替换 VITE_ENV_VAR
      // 如果在 Vercel 中你添加的环境变量名字不一样请替换一下此处的 VITE_ENV_VAR
      banner: `console.log("Vite env var value:", "${process.env.BASE_URL}")`,
    },
  },
});
