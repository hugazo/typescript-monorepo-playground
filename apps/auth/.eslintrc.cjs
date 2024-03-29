module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue-pug/vue3-essential',
    '../../.eslintrc.cjs',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // eslint-disable-next-line n/no-path-concat
    project: `${__dirname}/tsconfig.eslint.json`,
    extraFileExtensions: ['.vue'],
  },
};
