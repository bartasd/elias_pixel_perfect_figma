import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/elias_pixel_perfect_figma/',
  plugins: [react()],
})
