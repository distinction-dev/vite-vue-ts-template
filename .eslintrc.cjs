module.exports = {
  root: true,
  env: {
      browser: true,
      node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      ecmaVersion: 2021,
      ecmaFeatures: {
          globalReturn: false,
          impliedStrict: false,
          jsx: false,
      },
  },
  overrides: [
      {
          files: ['*.ts', '*.tsx'],
          rules: {
              // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
              // does not work with type definitions
              'no-unused-vars': 'off',
          },
      },
  ],
  rules: {
      'vue/no-unused-components': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      camelCase: [
          'off',
          {
              ignoreImports: true,
              ignoreDestructuring: true,
          },
      ],
  },
}
