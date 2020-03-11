---
'braid-design-system': major
---

Add customisable `MenuRenderer` component

**BREAKING CHANGES**

- Rename `OverflowMenuItem` to `MenuItem`.
- Removed `type="link"` from `OverflowMenuItem` due to an accessibility issue with the approach (based on review of consumer usage, it did not seem to be used).

**FEATURES**

**`MenuRenderer`**

Encapsulates all the behaviours of an accessible menu button, allowing consumers to define a custom `trigger` to open the menu. The trigger function receives two arguments:

1. Props required for accessibility, including mouse/keyboard interactions
2. Menu state object containing the `open` state.

```tsx
<MenuRenderer
  trigger={(triggerProps, { open }) => (
    <button {...triggerProps}>Menu</button>
  )}
>
  <MenuItem onClick={...}>Option</MenuItem>
</MenuRenderer>
```

**MIGRATION GUIDE**

**`OverflowMenuItem`**

Rename `OverflowMenuItem` to `MenuItem`.

```diff
 <OverflowMenu label="Overflow">
-  <OverflowMenuItem onClick={...}>Option</OverflowMenuItem>
+  <MenuItem onClick={...}>Option</MenuItem>
 </OverflowMenu>
```

Changing the `type` is no longer supported due to an accessibility issue with the previous implementation. Please get in contact via Slack if you depended on this.

```diff
 <OverflowMenu label="Overflow">
-  <OverflowMenuItem type="link" onClick={...}>Option</OverflowMenuItem>
+  <MenuItem onClick={...}>Option</MenuItem>
 </OverflowMenu>
```
