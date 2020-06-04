module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'react',
    'react-hooks' // rules for hooks (eslint-plugin-react-hooks)
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
