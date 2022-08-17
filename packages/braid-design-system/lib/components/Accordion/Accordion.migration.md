# Accordion Migration Guide

## API Changes

- The overall design and layout has changed slightly. For consistency, it's recommended that `AccordionItem` is contained within an [Accordion](https://seek-oss.github.io/braid-design-system/components/Accordion). Design review is recommended.
- The `title` prop on `AccordionItem` has been renamed to `label`. For accessibility reasons, this only accepts a string.
- The `onClose` and `onOpen` props on `AccordionItem` have been replaced with a single `onToggle` prop which receives the new `expanded` state as an argument.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Accordion)

### Diff

```diff
+<Accordion>
  <AccordionItem
-    title="Accordion item"
+    label="Accordion item"
-    onOpen={() => { ... }}
-    onClose={() => { ... }}>
+    onToggle={(expanded) => { ... }}>
    ...
+</Accordion>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/accordion)
