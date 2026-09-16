import { defineConfig } from "vite-plus";

export default defineConfig({
  test: { clearMocks: false },
  fmt: { sortImports: {}, sortPackageJson: {} },
  lint: { options: { typeAware: true, typeCheck: true } },
  pack: { deps: { resolveDepSubpath: true }, sourcemap: true },
  resolve: {
    conditions: ["browser"],
  },
});
