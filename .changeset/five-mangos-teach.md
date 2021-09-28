---
'braid-design-system': major
---

Remove previously deprecated `ButtonRenderer` component in favour of [`Button`](https://seek-oss.github.io/braid-design-system/components/Button) and [`ButtonLink`](https://seek-oss.github.io/braid-design-system/components/ButtonLink).

**MIGRATION GUIDE**

If you were using this to render an `a` element that visually looks like a button, you should be using [`ButtonLink`](https://seek-oss.github.io/braid-design-system/components/ButtonLink)

```diff
-  <ButtonRenderer>
-    {(ButtonChildren, buttonProps) => (
-      <a to="#" {...buttonProps}>
-        Visually a button
-      </a>
-    )}
-  </ButtonRenderer>
+  <ButtonLink>
+    Visually a button
+  </ButtonLink>
```
