module.exports = {
  extends: ['../../.eslintrc.cjs'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.eslint.json`,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/naming-convention': 0,
    'import/extensions': 0,
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
