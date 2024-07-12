import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Carregar variáveis de ambiente com base no `mode`
  const env = loadEnv(mode, process.cwd(), '');

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
				"/api": {
					target: env.VITE_API_URL,
					changeOrigin: true,
					secure: false,
					rewrite: (p) => p.replace(/^\/api/, ""),
				},
			},
			cors: false,
		},
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      'process.env': env, // Esta linha permite que você use `process.env` no seu código
    },
  };
});