import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const SHARED_CONFIG = {
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  ...SHARED_CONFIG,
  base: mode === "development" ? undefined : "/portfolio/",
}));
