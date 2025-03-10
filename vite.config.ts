import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Web/", // ✅ Ensure this matches your repo name
  build: {
    outDir: "dist", // ✅ Ensures correct output folder for GitHub Pages
    assetsDir: "assets", // ✅ Keeps assets in the correct folder
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
