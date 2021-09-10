module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: { wx: true, wxShareInfo: true },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    createDefaultProgram: true,
    extraFileExtensions: ['.json'],
  },
  rules: {
    semi: ['error', 'never'],
    // "@typescript-eslint/no-unused-vars": ["error"],
    '@typescript-eslint/no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-target-blank': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'prefer-destructuring': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
  },
}
