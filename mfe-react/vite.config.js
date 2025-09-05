import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe-react",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.jsx",
      },
    }),
  ],
  build: {
    minify: true,
  },
});
