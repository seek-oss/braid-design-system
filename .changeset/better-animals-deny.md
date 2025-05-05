---
'@braid-design-system/source.macro': major
---

Run `prettier` on macro code output

**BREAKING CHANGE**:

The code string returned by the macro is now formatted with `prettier` by default. The resulting code string may be different relative to previous versions of the macro, so please ensure it aligns with your expectations.

Prettier formatting can be disabled via the `formatWithPrettier` configuration option2️⃣:

```js
const babelTransformOptions = {
  plugins: [
    [require.resolve('babel-plugin-macros'), { source: { formatWithPrettier: false } }],
  ],
}
```
