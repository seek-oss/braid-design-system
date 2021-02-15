---
'braid-design-system': minor
---

---
updated:
  - TooltipRenderer
---

**TooltipRenderer:** Add `placement` prop, support `top` and `bottom`. Set default placement to `top`.

**EXAMPLE USAGE**

```tsx
<TooltipRenderer
  id={id}
  tooltip={<Text>This is a tooltip!</Text>}
  placement="top"
>
  {({ triggerProps }) => (
    <Box aria-label="Help" {...triggerProps}>
      <IconHelp />
    </Box>
  )}
</TooltipRenderer>
```
