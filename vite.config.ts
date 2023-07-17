import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_API_URL, NODE_ENV } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api/v1': {
        target: NODE_ENV === 'development' ? 'http://localhost:8080' : REACT_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
});
