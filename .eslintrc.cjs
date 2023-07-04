module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'no-unused-vars': 'off',
  },
};
