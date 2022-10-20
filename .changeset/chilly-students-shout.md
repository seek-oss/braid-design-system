---
'braid-design-system': minor
---

---
updated:
  - Box
---

**Box:** Support custom `data` prop format for attributes

While `Box` already supports the native HTML syntax for data attributes, e.g. `data-testid="123"`, it now supports the **data** prop too. This allows data attributes to be provided consistently to all components.

**EXAMPLE USAGE:**
```diff
 <Box
+  data={{ testId: 'myComponent' }}
 />
```
The above example results in the following HTML attribute being set on the element:
`data-testId="myComponent"`.
