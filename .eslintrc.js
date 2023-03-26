module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
  },
  'extends': [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
    'project': [
      './tsconfig.json',
    ],
  },
  'plugins': [
    'react',
    'i18next',
  ],
  'rules': {
    'indent': [2, 2, {
      'SwitchCase': 1,
    }],
    'quote-props': [1, 'always'],
    'comma-dangle': [1, 'always-multiline'],
    '@typescript-eslint/comma-dangle': 0,
    'semi': [2, 'always'],
    'no-extra-semi': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': [0, 'always'],
    '@typescript-eslint/naming-convention': [0, 'always'],
    '@typescript-eslint/strict-boolean-expressions': [0, 'always'],
    'i18next/no-literal-string': [0, 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-params-reassign': 'off',
  },
  'settings': {
    'react': {
      'version': '17.0.2',
    },
  },
};
