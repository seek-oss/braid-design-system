# AccordionItem Migration Guide

## API Changes

- The `title` prop has been renamed to `label`. For accessibility reasons, this only accepts a string.
- The `onClose` and `onOpen` props have been replaced with a single `onToggle` prop which receives the new `expanded` state as an argument.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/AccordionItem)

### Diff

```diff
-<AccordionItem
  title="Accordion item"
  onOpen={() => { ... }}
  onClose={() => { ... }}>
+<AccordionItem
  label="Accordion item"
  onToggle={(expanded) => { ... }}>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/accordion)
