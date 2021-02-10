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
react-hooks/rules-of-hooks
react-hooks/exhaustive-deps
no-case-declarations: "off",
no-inner-declarations
prefer-const
curly: "error
spaced-comment
radix: "error,
one-var
object-shorthand
no-var
no-param-reassign
no-underscore-dangle
no-undef-init
no-throw-literal
no-new-wrappers
no-eval
no-caller
no-bitwise
eqeqeq
max-classes-per-file
guard-for-in
complexity
arrow-body-style
no-unused-expressions
semi
max-lines-per-function
import/order
sonarjs/no-duplicate-string
sonarjs/cognitive-complexity
sonarjs/no-small-switch
sonarjs/no-inverted-boolean-check
```

The styling follows the prettier recommendations plus this custom config
```
{
  "singleQuote": true,
  "printWidth": 120
}
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
