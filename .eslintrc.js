module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  settings: {
    react: {
      version: '18.0.0',
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  }
};
