---
'braid-design-system': minor
---

Add `Disclosure` component

This component serves as a replacement for `ToggleContent` from [SEEK Style Guide.](https://github.com/seek-oss/seek-style-guide)

**SEEK STYLE GUIDE MIGRATION GUIDE**

- `ToggleContent` has been renamed to `Disclosure`.
- The `onShowMore` prop has been renamed to `onToggle`.
- The spacing around the button has changed to follow [Braid's layout guidelines.](https://seek-oss.github.io/braid-design-system/foundations/layout) Design review is recommeded.

```diff
-<ToggleContent onShowMore={(expanded) => { ... }} {...rest}>
+<Disclosure onToggle={(expanded) => { ... }} {...rest}>
```
