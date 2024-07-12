import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    preview: {
      proxy: {
        'https://cdn-dev.preoday.com/challenge': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
      cors: false,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      'process.env': env,
    },
  }
})
