module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-refresh/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-hooks", "react-refresh"],
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
