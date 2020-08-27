---
'braid-design-system': minor
---

---
new:
  - Dialog
---

Add `Dialog` component

Follows the [WAI Aria Dialog (Modal) Pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal).

**EXAMPLE USAGE:**

```jsx
<Fragment>
  <Actions>
    <Button onClick={() => setOpen(true)}>Open dialog</Button>
  </Actions>

  <Dialog
    title="Dialog Example"
    id={id}
    open={open}
    onClose={setOpen}
  >
    <Placeholder height={100} width="100%" />
  </Dialog>
</Fragment>
```

See [the documentation](https://seek-oss.github.io/braid-design-system/components/Dialog) for an exhaustive list of features.
