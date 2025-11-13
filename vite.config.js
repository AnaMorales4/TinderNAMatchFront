import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Decide the API URL depending on environment
  const apiUrl =
    mode === 'development'
      ? 'http://localhost:8000/api'
      : 'https://95pg5zgmi1.execute-api.us-east-2.amazonaws.com/prod'

  const wsUrl =
    mode === 'development'
      ? 'http://localhost:8001/chat'
      : 'wss://ivm4ax4gkc.execute-api.us-east-2.amazonaws.com/prod'

  return {
    plugins: [react()], // ✅ this must be at the root, not inside define
    define: {
      __API_URL__: JSON.stringify(apiUrl), // ✅ global constant replacement
      __WS_URL__: JSON.stringify(wsUrl), // ✅ global constant replacement
    },
    server: {
      port: 8082,
      host: true,
    },
  }
})
