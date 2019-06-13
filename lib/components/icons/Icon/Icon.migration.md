# Icon Migration Guide

## API Changes

- If you need a custom icon size, use `size="fill"` to make the icon fill its container.
- No longer accepts arbitrary DOM properties, e.g. `className`.

### Diff

```diff
-<Icon className={styles.customSize} />
+<Icon size="fill" />
```
