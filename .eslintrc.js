module.exports = {
  // "extends": ["@babbel/eslint-config/node"] ,
  plugins: [
    'perfectionist',
  ],
  rules: {
    'perfectionist/sort-imports': [
      "error",
      {
        "groups": [
          [
            "builtin-type",
            "external-type",
            "index-type",
            "internal-type",
            "parent-type",
            "sibling-type",
            "type"
          ]
        ]
      }
    ]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    tsconfigRootDir: process.cwd(),
  },
}
