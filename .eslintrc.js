module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': 0,
    'no-param-reassign': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    radix: 0
  }
};
