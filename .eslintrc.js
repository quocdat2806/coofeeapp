module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  rules: {
    curly: 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'react-native/no-inline-styles': 0,
    // 'react-hooks/rules-of-hooks': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
