---
'braid-design-system': major
---

---
updated:
  - Stack
---

Update `Stack` to use CSS gap for spacing between children. Hidden elements  will now be ignored by `Stack`'s spacing.

**EXAMPLE USAGE:**
```jsx
<Stack space="small">
  <Text>First line</Text>
  <HiddenVisually>This line is ignored by Stack spacing</HiddenVisually>
  <Text>Second line</Text>
</Stack>
```

**MIGRATION GUIDE**

`Stack` spacing will no longer work as expected on the following browser versions:

- Chrome 83 and below,
- Edge 83 and below,
- Safari 14.0 and below, and
- Firefox 62 and below.

Consumers should consider their user base using these browser versions when upgrading to this version of `Stack`, in order to mitigate potential disruptions to the user experience.
