import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import stylisticJs from '@stylistic/eslint-plugin-js'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic/js': stylisticJs
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        "@typescript-eslint/no-explicit-any": ["warn"],
        "yoda": ["error"],
        "curly": ["warn", "all"],
        "eqeqeq": ["warn", "smart"],
        "radix": ["warn", "as-needed"],
        "prefer-const": ["warn", { "ignoreReadBeforeAssign": true, "destructuring": "all" }],
        "prefer-spread": ["warn"],
        "prefer-template": ["warn"],
        "dot-notation": ["warn", { "allowKeywords": true }],
        "default-case": ["warn"],
        "max-depth": ["warn", { "max": 5 }],
        "max-params": ["warn", { "max": 4 }],
        "constructor-super": ["warn"],
        "class-methods-use-this": ["warn", { "exceptMethods": ["render"] }],
        "valid-typeof": ["error", { "requireStringLiterals": true }],
        "require-yield": ["error"],
        "unicode-bom": ["error"],
        "symbol-description": ["error"],
        "block-scoped-var": ["error"],
        "id-blacklist": ["warn", "err", "cb", "callback"],
        "max-nested-callbacks": ["error", { "max": 4 }],
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
        "no-console": ["warn", { "allow": ["error", "warn", "info"] }],
        "no-fallthrough": ["warn", { "commentPattern": "no-break" }],
        "no-extend-native": ["warn", { "exceptions": ["Error", "Array"] }],
        "no-restricted-globals": ["warn", { "name": "event", "message": "Use local parameter instead." }],
        "no-undef-init": ["warn"],
        "no-useless-computed-key": ["warn"],
        "no-unneeded-ternary": ["warn", { "defaultAssignment": true }],
        "no-unsafe-negation": ["warn"],
        "no-unused-vars": ["warn", { "vars": "local", "args": "none", "ignoreRestSiblings": true, "varsIgnorePattern": "[iI]gnored" }],
        "no-else-return": ["warn"],
        "no-multi-assign": ["warn"],
        "no-useless-escape": ["warn"],
        "no-unused-labels": ["error"],
        "no-undefined": ["off"],
        "no-implied-eval": ["error"],
        "no-lone-blocks": ["error"],
        "no-iterator": ["error"],
        "no-labels": ["error"],
        "no-with": ["warn"],
        "no-new": ["error"],
        "no-undef": ["error"],
        "no-empty": ["error"],
        "no-bitwise": ["error"],
        "no-new-func": ["error"],
        "no-unreachable": ["error"],
        "no-throw-literal": ["error"],
        "no-useless-rename": ["error"],
        "no-object-constructor": ["error"],
        "no-loop-func": ["error"],
        "no-multi-str": ["error"],
        "no-new-wrappers": ["error"],
        "no-sequences": ["error"],
        "no-useless-concat": ["error"],
        "no-var": ["error"],
        "no-proto": ["error"],
        "no-useless-call": ["error"],
        "no-useless-constructor": ["error"],
        "no-duplicate-imports": ["error", { "includeExports": true }],
        "no-underscore-dangle": ["warn", { "allow": ["_object","__isNew__", "_number", "_instance", "_mongoClientPromise", "_id", "_doc", "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
        "no-restricted-imports": ["error", {"paths": ["import1", "import2"], "patterns": ["import1/private/*", "import2/*", "!import2/good"]}],
        "@stylistic/js/semi-spacing": ["warn", { "before": false, "after": true }],
        "@stylistic/js/no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1, "maxBOF": 1}],
        "@stylistic/js/space-in-parens": ["warn", "never"],
        "@stylistic/js/space-before-function-paren": ["warn", "always"],
        "@stylistic/js/arrow-spacing": ["warn", { "before": true, "after": true }],
        "@stylistic/js/comma-spacing": ["warn", { "before": false, "after": true }],
        "@stylistic/js/generator-star-spacing": ["warn", { "before": true, "after": true }],
        "@stylistic/js/comma-style": ["warn", "last"],
        "@stylistic/js/comma-dangle": ["warn", {"imports": "never", "exports": "never", "functions": "never", "arrays": "always-multiline", "objects": "always-multiline",}],
        "@stylistic/js/no-tabs": ["warn"],
        "@stylistic/js/yield-star-spacing": ["warn"],
        "@stylistic/js/dot-location": ["warn", "property"],
        "@stylistic/js/func-call-spacing": ["warn", "never"],
        "@stylistic/js/quote-props": ["warn", "as-needed"],
        "@stylistic/js/block-spacing": ["warn", "always"],
        "@stylistic/js/key-spacing": ["warn", { "afterColon": true }],
        "@stylistic/js/operator-linebreak": ["warn", "before"],
        "@stylistic/js/template-curly-spacing" : ["off"],
        "@stylistic/js/indent": ["warn", 2, { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral"] }],
        "@stylistic/js/space-before-blocks": ["warn", "always"],
        "@stylistic/js/rest-spread-spacing": ["warn", "never"],
        "@stylistic/js/object-curly-spacing": ["warn", "always"],
        "@stylistic/js/max-statements-per-line": ["warn", { "max": 2 }],
        "@stylistic/js/no-confusing-arrow": ["off", { "allowParens": true }],
        "@stylistic/js/no-multi-spaces": ["warn", { "ignoreEOLComments": true }],
        "@stylistic/js/brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "@stylistic/js/keyword-spacing": ["warn", { "before": true, "after": true }],
        "@stylistic/js/quotes": ["error", "single"],
        "@stylistic/js/eol-last": ["warn", "always"],
        "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
        "@stylistic/js/semi": ["warn", "always"],
        "@stylistic/js/new-parens": ["error"],
        "@stylistic/js/no-floating-decimal": ["error"],
        "@stylistic/js/linebreak-style": ["error", "unix"],
        "@stylistic/js/no-trailing-spaces": ["warn"],
        "@stylistic/js/array-bracket-spacing": ["error", "never"],
        "@stylistic/js/computed-property-spacing": ["error", "never"],
        "@stylistic/js/lines-between-class-members": ["error", "always"],
        "@stylistic/js/no-mixed-operators": ["error", { "groups": [["&&", "||"]] }],
        "@stylistic/js/max-len": ["error", {
            "code": 140,
            "comments": 150,
            "tabWidth": 4,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignorePattern": "import",
            "ignoreTemplateLiterals": true,
            "ignoreTrailingComments": true
        }],
        // "import/no-unresolved": ["warn", { "ignore": ["../extensiton/*"] }], TEST
        // "import/named": ["error"], TEST
        // "react/no-unused-prop-types": ["error"], TEST
        // "react/require-default-props": ["off"],
        // "react/default-props-match-prop-types": ["warn"], TEST
        "react/prop-types":["off"],
        "react/no-unused-state": ["warn"],
        "react/prefer-stateless-function": ["warn", { "ignorePureComponents": true }],
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": [1, { "enableDangerousAutofixThisMayCauseInfiniteLoops": true }],
        "react/display-name": ["off"],
        "react/jsx-curly-spacing": ["warn", {"when": "never", "children": {"when": "always"}}]
    },
  },
)
