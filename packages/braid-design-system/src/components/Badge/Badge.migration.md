# Badge Migration Guide

## API Changes

- `strong={boolean}` has moved to `weight="strong"`. Also applies for `isBold={boolean}` in Seek Asia Style Guide.
- Deprecated `color={'progressing'|'default'|'declined'|'expired'|'new'}` & `tone='accent'|'neutral'}` in favour of `tone={'positive'|'info'|'critical'|'neutral'}`. Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.
- Deprecated `label` in favour of passing the content as `children`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API](https://seek-oss.github.io/braid-design-system/components/Badge).

## Diff

## SEEK Style Guide

```diff
-<Badge strong>New</Badge>
+<Badge weight="strong">New</Badge>
```

## SEEK Asia Style Guide

```diff
-<Badge isBold>New</Badge>
+<Badge weight="strong">New</Badge>
```

```diff
-<Badge label="Progressing" />
+<Badge>Progressing</Badge>
```

Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/badge)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/badge)
