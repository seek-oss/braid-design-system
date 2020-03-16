---
'braid-design-system': minor
---

MenuRenderer: Add support for configuring the menu offset from the trigger

**FEATURES**

**`MenuRenderer`**

Configure the offset distance between the menu trigger and menu using the `offsetSpace` prop. As with all space values in the system, this accepts a responsive prop.

```diff
 <MenuRenderer
+  offsetSpace="small"
   trigger={(triggerProps, { open }) => (
     <button {...triggerProps}>Menu</button>
   )}
 >
   <MenuItem onClick={...}>Option</MenuItem>
 </MenuRenderer>
```
