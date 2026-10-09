import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    manifest: true,
    rollupOptions: {
      output: {
        // keep React in its own long-cached chunk
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) return "react";
        },
      },
    },
  },
  ssr: {
    noExternal: ["react-router"],
  },
});
