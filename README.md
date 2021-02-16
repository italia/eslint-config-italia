# 🧹 ESLint config Italia

This package provides an ESLint + Prettier configuration for React.js JavaScript projects.

This ESLint config extends the following configs
```
eslint:recommended
plugin:react/recommended
prettier
prettier/react
plugin:sonarjs/recommended
```

On top of the base config, these rules are applied
```
"react-hooks/rules-of-hooks": "error"
"react-hooks/exhaustive-deps": "error"
"no-case-declarations": "off"
"no-inner-declarations": "off"
"prefer-const": "error"
"curly": "error"
"spaced-comment": ["error", "always", { "block": { "balanced": true } }]
"radix": "error"
"one-var": ["error", "never"]
"object-shorthand": "error"
"no-var": "error"
"no-param-reassign": "error"
"no-underscore-dangle": "error"
"no-undef-init": "error"
"no-throw-literal": "error"
"no-new-wrappers": "error"
"no-eval": "error"
"no-caller": "error"
"no-bitwise": "error"
"eqeqeq": ["error", "smart"]
"max-classes-per-file": ["error", 1]
"guard-for-in": "error"
"complexity": "error"
"arrow-body-style": "error"
"no-unused-expressions": "off"
"semi": "off"
"max-lines-per-function": ["error", 200]
"import/order": "error"
"sonarjs/no-duplicate-string": "error"
"sonarjs/cognitive-complexity": ["error", 19]
"sonarjs/no-small-switch": "error"
"sonarjs/no-inverted-boolean-check": "error"
```

The styling follows the prettier recommendations plus this custom config
```
"singleQuote": true
"printWidth": 120
```

### 💻 Installation

To use this package, install it as a devDependency inside your project

```
yarn add --dev eslint eslint-config-italia
```

### 🪛 Configuration
Create a `.eslintrc` file with the following content

```
{
  "extends": ["eslint-config-italia"]
}
```

Add a lint script inside the `package.json`

```
"scripts": {
  "lint": "eslint src --ext .js",
  ...
}
```

### 🚀 Run the linter
```
yarn lint
```
