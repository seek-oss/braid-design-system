# HiddenVisually Migration Guide

## API Changes

- No longer accepts a `component` prop. This is now inferred internally based on whether it's nested within a `Text` or `Heading` component.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/HiddenVisually)

## Diff

### SEEK Style Guide

```diff
-<ScreenReaderOnly>...</ScreenReaderOnly>
+<HiddenVisually>...</HiddenVisually>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/screen-reader-only)
