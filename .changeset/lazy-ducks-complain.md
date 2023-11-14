---
'braid-design-system': minor
---

---
updated:

- ButtonIcon

---

Add optional `tooltipPlacement` prop to `ButtonIcon`

The `tooltipPlacement` prop allows you to specify the placement of the tooltip to either `top` or `bottom`.
The default value is `top`.

**EXAMPLE USAGE:**

```jsx
<Stack space="gutter">
  <Inline space="gutter" alignY="center">
    <ButtonIcon
      size="standard"
      icon={<IconArrow direction={'up'}/>}
      label="The tooltipPlacement is “top”"
      id="size-1"
      tooltipPlacement="top"
    />
    <Text tone="secondary" size="xsmall">
      TOP
    </Text>
  </Inline>
  <Inline space="gutter" alignY="center">
    <ButtonIcon
      size="standard"
      icon={<IconArrow direction={'down'}/>}
      label="The tooltipPlacement is “bottom”"
      id="size-2"
      tooltipPlacement="bottom"
    />
    <Text tone="secondary" size="xsmall">
      BOTTOM
    </Text>
  </Inline>
</Stack>
```
