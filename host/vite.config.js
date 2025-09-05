import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [
    vue(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        "mfe-react": "http://localhost:5002/assets/remoteEntry.js",
        "mfe-svelte": "http://localhost:5003/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    minify: true,
  },
});
