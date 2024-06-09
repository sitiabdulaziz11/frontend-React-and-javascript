import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// // vite.config.js


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001 // Specify a different port here
  }
});
