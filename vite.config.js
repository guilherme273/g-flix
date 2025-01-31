import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Altere para o subdiretório, se necessário, ex: '/meu-projeto/'
  plugins: [react()],
});
