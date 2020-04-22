---
'braid-design-system': minor
---

AccordionItem: Support `onToggle` prop without `expanded` to allow tracking in uncontrolled mode

For example:

```jsx
<AccordionItem
  id="id"
  label="Label"
  onToggle={(expanded) => trackSomething(expanded)}
>
  ...
</AccordionItem>
```
