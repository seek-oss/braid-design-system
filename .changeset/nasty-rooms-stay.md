---
'braid-design-system': patch
---

---
updated:
  - AccordionItem
  - Button
  - ButtonLink
  - Checkbox
  - Heading
  - MenuItem
  - MenuItemLink
  - RadioItem
  - Tab
  - Text
  - TextLink
  - TextLinkButton
  - useToast
---

Support `null` for `badge` and `icon` slots, in addition to `undefined`.

Previously, `badge` and `icon` props could only be explicitly omitted with `undefined`.
This change allows passing `null`.

**EXAMPLE USAGE:**

```tsx
+ <Button icon={null} />
```
