# Disclosure Migration Guide

## API Changes

- `ToggleContent` has been renamed to `Disclosure`.
- The `onShowMore` prop has been renamed to `onToggle`.
- The spacing around the button has changed to follow [Braid's layout guidelines.](https://seek-oss.github.io/braid-design-system/foundations/layout) Design review is recommeded.

### Diff

```diff
-<ToggleContent onShowMore={(expanded) => { ... }} {...rest}>
+<Disclosure onToggle={(expanded) => { ... }} {...rest}>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/toggle-content)
