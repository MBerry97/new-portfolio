module.exports = {
  extends: 'airbnb-typescript-prettier',
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
      },
    ],
    'react/function-component-definition': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
