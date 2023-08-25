import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pkg from "./package.json";

const depKeys = [
  //...Object.keys(pkg['dependencies'] || {}),
  ...Object.keys(pkg["peerDependencies"] || {}),
];

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: pkg.name,
      fileName: (format) => `polkadot-hooks.${format}.js`,
    },
    rollupOptions: {
      external: ["react", ...depKeys],
      output: {
        globals: {
          ...depKeys.reduce((acc, key) => {
            acc[key] = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
            return acc;
          }, {}),
          react: "React",
        },
      },
    },
  },
});
