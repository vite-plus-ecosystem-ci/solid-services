import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: { sortImports: {}, sortPackageJson: {} },
  lint: { options: { typeAware: true, typeCheck: true } },
  pack: { deps: { resolveDepSubpath: true }, sourcemap: true },
  resolve: {
    conditions: ["browser"],
  },
});
