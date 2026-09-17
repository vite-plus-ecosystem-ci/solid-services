import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  fmt: { sortImports: {}, sortPackageJson: {} },
  lint: { options: { typeAware: true, typeCheck: true } },
  pack: { deps: { resolveDepSubpath: true }, sourcemap: true },
  resolve: {
    conditions: ["browser"],
  },
});
