import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            // Made lowercase, and added '*' to completely catch deep Windows subfolders
            ignored: ['**/.vs/**/*']
        }
    }
})
