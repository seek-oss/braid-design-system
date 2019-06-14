# Button Migration Guide

## API Changes

- The `color` and `ghost` props have been removed in favour of `weight={'strong' | 'regular' | 'weak'}`.
- The `transparent`/`hyperlink` color has been removed. Use [`TextLink`](https://seek-oss.github.io/braid-design-system/components/TextLink)/[`TextLinkRenderer`](https://seek-oss.github.io/braid-design-system/components/TextLinkRenderer) instead.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Button)

## TBD

- `ButtonRenderer` or similar, like [TextLinkRenderer](https://seek-oss.github.io/braid-design-system/components/TextLinkRenderer).
- `compact={boolean}`

## Diff

### SEEK Style Guide

```diff
-<Button color="pink">Primary</Button>
+<Button weight="strong">Primary</Button>

-<Button color="blue">Secondary</Button>
+<Button>Secondary</Button>

-<Button color="blue" ghost>Tertiary</Button>
+<Button weight="weak">Tertiary</Button>
```

### SEEK Asia Style Guide

```diff
-<Button color="callToAction">Primary</Button>
+<Button weight="strong">Primary</Button>

-<Button color="primary">Secondary</Button>
+<Button>Secondary</Button>

-<Button color="tertiary">Tertiary</Button>
+<Button weight="weak">Tertiary</Button>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/button)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/button)
