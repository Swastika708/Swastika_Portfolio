import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Swastika_Portfolio/',  // <-- GitHub repo name
  plugins: [react()],
})