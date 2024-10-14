---
'braid-design-system': minor
---

---
updated:
  - Hidden
---

**Hidden:** Deprecate `screen` prop.

Deprecate `screen` prop.
To provide content to screen readers without rendering it to the screen, consumers should use `HiddenVisually` instead.

### MIGRATION GUIDE:

```diff
- <Hidden screen>
+ <Hidden>
```