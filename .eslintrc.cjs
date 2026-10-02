/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: [
    "!**/.server",
    "!**/.client",
    "extensions/**/dist/**",
    "build/**",
    "node_modules/**",
  ],
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "react/no-unknown-property": ["error", { ignore: ["variant"] }],
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },
    {
      files: [
        ".eslintrc.cjs",
        "vite.config.ts",
        ".graphqlrc.js",
        "app/shopify.server.ts",
        "**/*.server.{js,ts}",
        "extensions/**/*.test.js",
      ],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
  globals: {
    shopify: "readonly",
  },
};
