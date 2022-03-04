module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:wc/recommended',
    'plugin:lit/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
