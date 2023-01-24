# Text Migration Guide

## API Changes

- No longer handles heading text. Use [`Heading`](https://seek-oss.github.io/braid-design-system/components/Heading) instead.
- Deprecated `conversational`/`loud`/`intimate`/`whispering` in favour of `size={'large' | 'standard' | 'small'}` and `weight={'strong' | 'regular'}`. Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.
- No longer renders white space below it, also removing the need for a `raw` prop. Consider using a [`Stack`](https://seek-oss.github.io/braid-design-system/components/Stack) component instead.
- Removed `weak` weight.
- Removed boolean size props in favour of `size` and `tone` props.
- Removed `bullet` prop. Use [`Bullet`](https://seek-oss.github.io/braid-design-system/components/Bullet) insted.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Text)

### Diff

```diff
// The `raw` prop is deprecated:
-<Text raw>...</Text>
+<Text>...</Text>

// Apply white space with <Stack>:
-<Text>...</Text>
-<Text>...</Text>
+<Stack space="small">
+  <Text>...</Text>
+  <Text>...</Text>
+</Stack>

// Swap boolean props for enum props:
-<Text large>...</Text>
-<Text positive>...</Text>
+<Text size="large">...</Text>
+<Text tone="positive">...</Text>
```

### SEEK Asia Style Guide

Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/text)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/text)
