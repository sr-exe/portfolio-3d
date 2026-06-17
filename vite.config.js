import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path for GitHub Pages project sites (https://<user>.github.io/<repo>/).
// - Deploying to a repo named "portfolio-3d" -> keep as is.
// - Deploying to a USER page repo named "<username>.github.io" -> change to '/'.
// - Using a custom domain -> change to '/'.
export default defineConfig({
  base: '/portfolio-3d/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
