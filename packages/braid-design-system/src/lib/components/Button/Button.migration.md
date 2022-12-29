# Button Migration Guide

## API Changes

- The `color`, `ghost` and `transparent`/`hyperlink` props have been removed in favour of `variant={'solid' | 'ghost' | 'soft' | 'transparent'}` and `tone={'brandAccent' | 'critical'}`.
- The `compact` prop has been removed in favour of `size="small"`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Button)

## Diff

### SEEK Style Guide

```diff
-<Button color="pink">Primary</Button>
+<Button tone="brandAccent">Primary</Button>

-<Button color="blue">Secondary</Button>
+<Button>Secondary</Button>

-<Button color="blue" ghost>Tertiary</Button>
+<Button variant="ghost">Tertiary</Button>
```

### SEEK Asia Style Guide

```diff
-<Button color="callToAction">Primary</Button>
+<Button tone="brandAccent">Primary</Button>

-<Button color="primary">Secondary</Button>
+<Button>Secondary</Button>

-<Button color="tertiary">Tertiary</Button>
+<Button variant="ghost">Tertiary</Button>

-<Button compact>Small</Button>
+<Button size="small">Small</Button>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/button)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/button)
