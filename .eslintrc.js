/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // ❌ disables the error
      'prefer-const': 'off', // Optional: suppress const error
    },
  };
  