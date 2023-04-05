---
'braid-design-system': minor
---

---
updated:
  - Textarea
---

**Textarea:** Add support for `caution` highlightRanges

Providing a `tone` of `caution` along with a set of `highlightRanges` will now apply the `caution` tone to the text being highlighted.
To complement this feature, the design has been uplifted to work consistently across both the `critical` and `caution` tones.

**EXAMPLE USAGE:**
```jsx
<Textarea
  tone="caution"
  message="Caution message"
  highlightRanges={...}
/>
```
