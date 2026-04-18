import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/coverage/**",
      "apps/web/next-env.d.ts",
      "**/jest.config.cjs",
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    files: ["apps/web/**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },
  {
    files: ["packages/domain/**/*.test.ts"],
    languageOptions: {
      globals: { ...globals.vitest },
    },
  },
);
