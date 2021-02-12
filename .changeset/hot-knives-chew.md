---
'braid-design-system': minor
---

---
new:
  - TooltipRenderer
---

Add **TooltipRenderer** component

Tooltips appear on mouse hover, tap and keyboard focus, and are hidden when scrolling and clicking/tapping/focusing on other elements.

Tooltips cannot contain interactive elements like links, buttons or form elements.

Note: The trigger element must support `ref`, `tabIndex` and `aria-describedby` props.

**EXAMPLE USAGE**

```tsx
<TooltipRenderer
  id={id}
  tooltip={
    <Text>
      This is a tooltip!
    </Text>
  }
>
  {({ triggerProps }) => (
    <Box aria-label="Help" {...triggerProps}>
      <IconHelp />
    </Box>
  )}
</TooltipRenderer>
```
