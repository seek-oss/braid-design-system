---
'braid-design-system': minor
---

---
updated:
  - Drawer
---

**Drawer:** Allow omitting the visible title when an `aria-label` names the dialog

A `title` is no longer required. Provide either a `title` or an `aria-label`. Use `description` with a `title`, or `aria-description` with an `aria-label`. When untitled, content starts directly below the close button.

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