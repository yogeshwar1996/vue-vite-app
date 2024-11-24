// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 2021, // Optional: Specify the dev server port
  },
});
