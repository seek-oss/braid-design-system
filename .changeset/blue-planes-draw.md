---
'braid-design-system': patch
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Improve alignment of transparent buttons with icons against Text with icons

To improve optical balance of a `Button` with an `icon`, the icon container is bled to the left to balance against the larger horizontal inset of a `standard` button.
This alignment correction is now only applied on `standard` sized buttons that are not using the `transparent` variant.

Isolating this alignment correction enables transparent buttons to better align with other components with `icon` slots, for example:

```jsx
<Stack space="small">
  <Text icon={<IconSend />}>Text</Text>
  <Button icon={<IconSend />} variant="transparent" bleed>
    Button
  </Button>
</Stack>
```

Icons and text will now be perfectly aligned between Button components and others icon slots with the same text size.
