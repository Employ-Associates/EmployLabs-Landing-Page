import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

// .mts because the config is ESM and the package is CommonJS.
// JSX is transformed by vitest's own oxc pipeline; the post modules are .tsx
// and get imported by the tests, so no extra plugin is needed.
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    environment: "node",
  },
});
