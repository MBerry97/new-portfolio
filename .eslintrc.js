module.exports = {
  extends: 'airbnb-typescript-prettier',
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none'
      }
    ]
  }
};
