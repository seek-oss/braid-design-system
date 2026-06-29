---
'braid-design-system': minor
---

---
updated:
  - Drawer
---

**Drawer**: Allow users to add fixed footer content to Drawer.

**EXAMPLE USAGE:**
```jsx
  <Drawer
    title="Drawer"
    open={true}
    footer={
      <Actions>
        <Button variant="solid" tone="formAccent">
          Save
        </Button>
        <Button variant="transparent" tone="formAccent">
          Cancel
        </Button>
      </Actions>
    }
  >
```