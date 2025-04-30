# `@braid-design-system/source.macro`

A [Babel macro][babel-plugin-macros] for authoring code snippets as code.

## Example and use cases

In Braid, documentation is authored as code.
Rather than writing snippets and code examples as strings, the source macro enables them to be written as code instead.
The first argument passed to the macro will be returned both as a string and as the original value inside an object:

```js
import source from '@braid-design-system/source.macro';

const result = source(<div>Hello world</div>);
// Returns { code: '<div>Hello world</div>', value: <div>Hello world</div> }
```

This macro enables several capabilities that are not easily achievable with snippets:

- Snippets can be type-checked and linted
- Snippets can be rendered directly in documentation
- The code string representing the snippet can still be displayed in documentation, copied to the clipboard, or in the case of Braid, used to generate a [Playroom] link

## Setup

Install `@braid-design-system/source.macro`:

```sh
npm install --save-dev @braid-design-system/source.macro
```

Install and configure [`babel-plugin-macros`][babel-plugin-macros]:

```sh
npm install --save-dev babel-plugin-macros
```

```js
// babel.config.js
module.exports = {
  plugins: ['babel-plugin-macros'],
};
```

## Configuration

The source macro supports the following configuration options:

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'babel-plugin-macros',
      {
        source: {
          // Whether to return a code string and the original value in an object, or just the code string. Defaults to `false`.
          codeOnly: true,
          // Whether to format the code string using Prettier. Defaults to `true`.
          formatWithPretteir: false,
        },
      },
    ],
  ],
};
```

## Alternatives

[`react-element-to-jsx-string`] is a library that converts JSX elements to strings, but it cannot serialize functions, and the formatting of the resulting string is subpar relative to Prettier.

[babel-plugin-macros]: https://github.com/kentcdodds/babel-plugin-macros
[Playroom]: https://github.com/seek-oss/playroom
[`react-element-to-jsx-string`]: https://www.npmjs.com/package/react-element-to-jsx-string
