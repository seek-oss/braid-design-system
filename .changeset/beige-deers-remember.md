---
'braid-design-system': minor
---

Add `Accordion` and `AccordionItem` components

Example usage:

```jsx
<Accordion>
  <AccordionItem id="item_1" label="Accordion item 1">
    <Text>Accordion item content</Text>
  </AccordionItem>
  <AccordionItem id="item_2" label="Accordion item 2">
    <Text>Accordion item content</Text>
  </AccordionItem>
  <AccordionItem id="item_3" label="Accordion item 3">
    <Text>Accordion item content</Text>
  </AccordionItem>
</Accordion>
```

Accordions manage their own state internally by default. If you'd like to take control of them yourself, you can pass an `expanded` prop to `AccordionItem` as well as an `onToggle` callback.

```jsx
const [expanded, setExpanded] = useState(false);

<AccordionItem
  id="id"
  label="Accordion item"
  expanded={expanded}
  onToggle={setExpanded}
>
  <Text>Accordion item content</Text>
</AccordionItem>;
```
