---
'@braid-design-system/source.macro': major
---

Replace the Babel macro with a Rolldown plugin

**BREAKING CHANGE**:

`source.macro` is no longer a [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros) macro. Calls to `source` are now replaced by a plugin for [Rolldown](https://rolldown.rs) (and Vite 8+), built on [`oxc-parser`](https://oxc.rs/docs/guide/usage/parser).

The package is now ESM only, and exports:

- `source`: the macro, now available as a named export. The default export is still supported
- `sourceMacroPlugin`: the Rolldown/Vite plugin
- `transformSourceMacro`: the underlying transform, for programmatic use

**MIGRATION GUIDE**:

Remove `babel-plugin-macros` and add the plugin to your Rolldown or Vite config instead:

```js
import { sourceMacroPlugin } from '@braid-design-system/source.macro';

export default {
  plugins: [sourceMacroPlugin()],
};
```

The `codeOnly` option is now passed to the plugin directly, rather than nested under `source` in the `babel-plugin-macros` config. The `formatWithPrettier` option has been removed, and code strings are always formatted with Prettier.

Only `source` imported without being renamed, either as the default or named export of `@braid-design-system/source.macro`, is supported. The macro can no longer be renamed, imported via a relative path or passed around as a value.

The code string for object, function and class arguments is now formatted as an expression, so objects are correctly formatted rather than being treated as a block statement.
