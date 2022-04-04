module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@babel/eslint-parser',
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': ['error', {
      ignores: ['Homepage', 'Header', 'Calculator', 'Director', 'Advantages', 'Clients', 'Partners'],
    }],
    'vuejs-accessibility/mouse-events-have-key-events': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-new': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'max-len': ['error', {
      ignoreStrings: true, ignoreUrls: true, code: 100, ignoreTemplateLiterals: true, ignorePattern: '"',
    }],
    'linebreak-style': 'off',
  },
};
