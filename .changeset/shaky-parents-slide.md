---
'braid-design-system': minor
---

---
updated:
  - Drawer
---

**Drawer:** Allow omitting the visible title when an `aria-label` names the dialog

A `title` is no longer required. Provide either a `title` or an `aria-label`. Use `description` with a `title`, or `aria-description` with an `aria-label`. Untitled Drawers no longer reserve space for a heading. Instead, space matching the close button is reserved, so content starts directly below it and scrolls beneath it.

**EXAMPLE USAGE:**

```jsx
<Drawer
  aria-label="Job details"
  aria-description="Details about the selected job"
  open={open}
  onClose={setOpen}
>
  ...
</Drawer>
```