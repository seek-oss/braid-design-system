---
'braid-design-system': minor
---

Add BraidTestProvider component.

This is an alternative to `BraidProvider` for unit test environments.

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
