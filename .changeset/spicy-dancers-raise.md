---
'braid-design-system': minor
---

---
updated:
  - Dialog
---

**Dialog**: Allow users to add fixed footer content to Dialog.

**EXAMPLE USAGE:**
```jsx
  <Dialog
    title="Dialog"
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