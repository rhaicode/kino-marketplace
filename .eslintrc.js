module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["components", "pages", "types", "utils", "util"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parserOptions: { ecmaFeatures: { jsx: true } },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/react",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // React
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    // Accessibility
    "jsx-a11y/label-has-associated-control": 0,

    // Import
    "import/prefer-default-export": "off",
    "import/extensions": "off",

    // Prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // TypeScript
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": [
      1,
      {
        allow: ["warn", "error"],
      },
    ],

    // Other
    "jsx-a11y/anchor-is-valid": "off",
  },
};
