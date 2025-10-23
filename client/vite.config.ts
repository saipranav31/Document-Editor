import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Important for GitHub Pages when the site is served under /<repo-name>/
  base: '/Document_-Editor/',
  server: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true
  }
})
