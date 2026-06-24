import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repoName.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS
  ? isUserOrOrgPage
    ? "/"
    : `/${repoName}/`
  : "/";

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    target: "es2019",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("react") || id.includes("react-dom") || id.includes("scheduler")) {
            return "react-vendor";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("@tsparticles") || id.includes("tsparticles")) {
            return "particles";
          }

          if (id.includes("react-icons")) {
            return "icons";
          }

          return "vendor";
        },
      },
    },
  },
});
