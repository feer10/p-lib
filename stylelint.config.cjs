module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.scss'],
    },
  ],
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin', 'if', 'else', 'each', 'include'],
      },
    ],
    'color-named': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'always',
    'order/properties-alphabetical-order': true,
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 3,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
  },
}
