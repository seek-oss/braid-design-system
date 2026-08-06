---
'braid-design-system': minor
---

---
updated:
  - Accordion
---

**Accordion:** Deprecate `space` prop and update spacing defaults

The `space` prop is now deprecated and will be removed in a future release. Spacing between items is now automatically derived from the `size` prop.

The following default spacing value has been updated:

| `dividers` | `size` | Previous default | New default |
| --- | --- | --- | --- |
| `false` | `standard` | `large` | `medium` |

**MIGRATION GUIDE:**

If the updated default causes an undesired visual change, you can preserve the previous spacing by explicitly setting the `space` prop while migrating:

```diff
 <Accordion
+  space="large"
   dividers={false}
   size="standard"
 >
```
