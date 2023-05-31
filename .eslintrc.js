module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
