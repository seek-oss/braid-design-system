---
'braid-design-system': patch
---

---
updated:
  - CheckboxStandalone
---

**CheckboxStandalone:** Enable alignment with Text

Enables `CheckboxStandalone` to be wrapped in a `Text` component, ensuring it only occupies the same layout as as surrounding text.
This is useful for visually aligning checkboxes in a custom layout alongside other text-based components, e.g. `AccordionItem`.

**EXAMPLE USAGE:**
```jsx
<Columns>
  <Column>
    <Text>
      <CheckboxStandalone />
    </Text>
  </Column>
  <Column>
    <AccordionItem />
  </Column>
</Columns>
```
