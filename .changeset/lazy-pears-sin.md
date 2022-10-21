---
'braid-design-system': patch
---

Provide dev time validation/warnings when the native data attribute format is provided to components that do not support it.
This is required as TypeScript does not validate kebab cased properties, and Braid components do not spread abritrary props.

This validation will prevent silent failures where attributes are seemingly provided, but not applied.

For example:

```jsx
<Card data-testid={123} />
// => Would not be applied and TypeScript would not error.
```

However, now the following console warning will guide users to use the `data` prop:

```diff
 Braid components do not support the native data attribute format. Use the “data” prop instead.
  <Component
-    data-testid={123}
+    data={{
+      testid: 123,
+    }}
  />
 For more details, see the “Data Attributes” documentation:
 https://seek-oss.github.io/braid-design-system/components/Box#data-attributes
```
