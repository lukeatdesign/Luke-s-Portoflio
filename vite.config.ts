import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Honor the port assigned by the preview harness (falls back to Vite's 5173)
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
