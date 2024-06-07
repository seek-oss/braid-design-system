---
'braid-design-system': minor
---

---
updated:
  - Toggle
---

**Toggle:** Add `togglePosition` prop

Introductions the `togglePosition` prop, enabling the toggle to be positioned either before or after the label text.

- `togglePosition="leading"` -  positions the toggle before the label text.
- `togglePosition="trailing"` - positions the toggle after the label text.

**EXAMPLE USAGE:**
```jsx
<Toggle togglePosition="trailing" label="Label" />
```