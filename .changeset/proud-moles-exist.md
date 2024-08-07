---
'braid-design-system': minor
---

---
new:
  - Spread
---

**Spread:** Add new layout component

Introduce a new layout component, `Spread`, used to justify content with both an equally distribute and a specify the minimum amount of space in between each child.

**EXAMPLE USAGE:**

The `Spread` component will work horizontally by default:

```jsx
<Spread space="small" alignY="center">
  <Heading level="4">Heading</Heading>

  <OverflowMenu label="Options">
    <MenuItem>First</MenuItem>
    <MenuItem>Second</MenuItem>
  </OverflowMenu>
</Spread>
```

But can be switched to `vertical` via the `direction` prop:

```jsx
<Spread space="large" direction="vertical">
  <Stack space="small">
    <Heading level="4">Heading</Heading>
    <Text>Text</Text>
  </Stack>

  <Text size="small" tone="secondary">
    Date
  </Text>
</Spread>
```
