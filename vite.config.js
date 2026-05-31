import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const base = process.env.GITHUB_ACTIONS ? '/portfolio-wpl2/' : '/'

export default defineConfig({
  base,
  plugins: [vue()],
})
