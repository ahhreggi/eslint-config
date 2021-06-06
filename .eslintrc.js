module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  "plugins": [
    "react-hooks",
  ],
  "rules": {
    "import/no-named-as-default": 0,
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-var": "error",
    "no-console": "off",
    "no-unused-vars": "warn",
    "func-call-spacing": [
      "error",
      "never"
    ],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "semi-spacing": "error",
    "func-style": ["error", "expression"],
    "space-infix-ops": "error",
    "space-in-parens": "error",
    "camelcase": "error",
    "eqeqeq": "error",
    "brace-style": "error",
    "space-before-function-paren": [ "warn", { "anonymous": "never", "named": "never", "asyncArrow": "never" } ],
    "func-names": ["error", "never"],
    "quotes": ["error", "double"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};