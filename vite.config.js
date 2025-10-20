import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vaibhav-portfolio/'   // <- change if repo name differs
})
