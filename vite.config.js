import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    // true
    allowedHosts: [
      "dev.quantumsenses.com",
      "dj.quantumsenses.com",
      "ac19f3d0-f27d-499b-ae4e-91985d3cc7d2-00-3iyy1k8fy6204.pike.replit.dev"
    ]
  },
  build: {
    sourcemap: process.env.NODE_ENV === 'development'
  }
});
