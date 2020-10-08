---
'braid-design-system': minor
---

---
updated:
  - Radio
  - Checkbox
---

**Radio,Checkbox:** Add description and badge support

Allows a way to provide more detail about a `Radio` or `Checkbox` item using `description`, bringing these fields into line with the rest of the form fields in Braid. Also allows a `badge` to be provided to be placed alongside the `label`.

**EXAMPLE USAGE:**
```jsx
<Radio
  label="Option"
  description="This option is your favourite"
  badge={
    <Badge tone="positive" weight="strong">
      New
    </Badge>
  }
/>
```

or

```jsx
<Checkbox
  label="Option"
  description="This option is your favourite"
  badge={
    <Badge tone="positive" weight="strong">
      New
    </Badge>
  }
/>
```
