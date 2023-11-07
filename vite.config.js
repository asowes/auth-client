import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/auth",
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  server: {
    host: "0.0.0.0",
    port: 5174,
    https: false,
    proxy: {
      "/api": {
        target: "http://192.168.203.102:8181", // 后端服务器地址
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // 添加上下文路径
      },
    },
  },
});
