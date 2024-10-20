import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows access from your phone on the same network
    port: 5173,       // You can specify the port if needed
  }
});
