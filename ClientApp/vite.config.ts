import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // Vite dev server runs on port 5173
        port: 5173,
        proxy: {
            // Any request starting with /api gets forwarded to .NET
            // This is how React talks to the backend during development
            // In production .NET serves React directly so no proxy needed
            '/api': {
                target: 'https://localhost:7289',
                changeOrigin: true,
                secure: false  // Allows self-signed certs in development
            }
        }
    },
    build: {
        // Vite builds into wwwroot so .NET can serve it in production
        outDir: '../wwwroot/app',
        emptyOutDir: true
    }
})