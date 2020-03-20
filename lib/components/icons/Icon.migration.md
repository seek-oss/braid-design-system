# Icon Migration Guide

Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.

## API Changes

- When inside a `Text` or `Heading` component, icons inherit the `size` and `tone` accordingly. As a result it's likely that you will be able to remove custom icon sizing styles in your application.
- If an icon is not in a `Text` or `Heading` the standard typographic hierarchy is available for sizing, eg. `size={'xsmall' | 'small' | 'standard' | 'large'}`) and will use the defined line height. Heading-sized icons are not supported outside of a heading context.
- If you need a custom icon size, use `size="fill"` to make the icon fill its container.
- If the vertical alignment of the icon doesn't look quite right, consider using the `alignY` prop which supports a value of `"uppercase"` or `"lowercase"`.
- No longer accepts arbitrary DOM properties, e.g. `className`, `svgClassName`, etc.

### Diff

```diff
# Icons inside a text context inherit the size, custom sizing is not permitted.
<Text size="large">
-  <Icon size="large" />
+  <Icon />
</Text>

# Icons inside a heading context inherit the size, custom sizing is not permitted.
-<Text size="heading">
-  <Icon size="heading" />
-</Text>
+<Heading level="1">
+  <Icon />
+</Heading>

# Icons inside a text context inherit the tone by default (can be overridden if needed).
<Text tone="critical">
-  <Icon tone="critical" />
+  <Icon />
</Text>

# Custom icon sizes are supported using `size="fill"` and applying the class to a wrapping element.
-<Icon className={styles.customSize} />
+<Box className={styles.customSize}>
+  <Icon size="fill" />
+</Box>
```
