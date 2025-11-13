import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Decide the API URL depending on environment
  const apiUrl =
    mode === 'development'
      ? 'http://localhost:3000/api'
      : 'https://api.yourdomain.com'

  return {
    plugins: [react()], // ✅ this must be at the root, not inside define
    define: {
      __API_URL__: JSON.stringify(apiUrl), // ✅ global constant replacement
    },
    server: {
      port: 8082,
      host: true,
    },
  }
})
