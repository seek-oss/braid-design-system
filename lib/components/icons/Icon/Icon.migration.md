# Icon Migration Guide

## API Changes

- Currently only supports Text sizes (`size={'standard' | 'large' | 'small'}`). Heading icons are not yet supported.
- Now supports an `inline={boolean}` size variant, which shrinks the icon to its respective font size rather than line height. As a result, it's likely that you will be able to remove custom icon sizing styles in your application.
- If you need a custom icon size, use `size="fill"` to make the icon fill its container.
- No longer accepts arbitrary DOM properties, e.g. `className`.

## Todo List

- Heading sizes.

### Diff

```diff
-<Icon className={styles.customSize} />
+<Icon size="fill" />
```
