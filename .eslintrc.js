module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 'warn',
    'react/jsx-key': 'warn',
    'react/display-name': 'warn',
    'array-callback-return': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
