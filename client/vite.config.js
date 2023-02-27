import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    devServer: {
        middleware: createProxyMiddleware({
            target: "http://localhost:4050/", // change this to the URL of your server
            changeOrigin: true,
        }),
    },
});
