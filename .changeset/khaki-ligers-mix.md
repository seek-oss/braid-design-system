---
'braid-design-system': minor
---

Add BraidTestProvider component.

This is an alternative to `BraidProvider` for unit test environments. Note that, as the name implies, this should _not_ be used in production code.

**MIGRATION GUIDE**

In your unit tests, you can replace usage of `BraidProvider` with `BraidTestProvider`, omitting the theme.

```diff
-<BraidProvider theme={wireframe}>
+<BraidTestProvider>
```

If for whatever reason your tests are relying on the presence of a specific theme, you can pass the name of the desired theme.

```diff
-<BraidProvider theme={seekAnz}>
+<BraidTestProvider themeName="seekAnz">
```
