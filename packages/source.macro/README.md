# `@braid-design-system/source.macro`

A [Rolldown] (and [Vite] 8+) plugin for authoring code snippets as code.

## Example and use cases

In Braid, documentation is authored as code.
Rather than writing snippets and code examples as strings, the `source` macro enables them to be written as code instead.
The first argument passed to the macro will be returned both as a string and as the original value inside an object:

```js
import { source } from '@braid-design-system/source.macro';

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

Add the plugin to your Rolldown or Vite config:

```js
// rolldown.config.js or vite.config.js
import { sourceMacroPlugin } from '@braid-design-system/source.macro';

export default {
  plugins: [sourceMacroPlugin()],
};
```

The plugin runs before other transforms, so the macro is replaced before anything else sees it.

> The `source` macro is also available as a default export, but the named export is preferred.

## Configuration

The plugin supports the following options:

```js
sourceMacroPlugin({
  // Whether to return a code string and the original value in an object, or just the code string. Defaults to `false`.
  codeOnly: true,
});
```

## Programmatic usage

The transform used by the plugin is also exported as `transformSourceMacro`, for use outside of a bundler.
It accepts the same options as the plugin, as well as an optional `filename`, which is used to determine the language of the code:

```js
import { transformSourceMacro } from '@braid-design-system/source.macro';

const { code, map } = await transformSourceMacro(
  `
    import { source } from '@braid-design-system/source.macro';

    const result = source(<div />);
  `,
  { filename: 'example.tsx', codeOnly: true },
);
```

## Limitations

`source` can only be called directly, e.g. `source(<div />)`.
Unlike a Babel macro, it must be imported as `source` (default or named) from `@braid-design-system/source.macro`, so it can't be renamed, passed around as a value or imported from a relative path.

## Alternatives

[`react-element-to-jsx-string`] is a library that converts JSX elements to strings, but it cannot serialize functions, and the formatting of the resulting string is subpar relative to Prettier.

[Rolldown]: https://rolldown.rs
[Vite]: https://vite.dev
[Playroom]: https://github.com/seek-oss/playroom
[`react-element-to-jsx-string`]: https://www.npmjs.com/package/react-element-to-jsx-string
