# Toggle Migration Guide

## API Changes

- `checked={boolean}` is now `on={boolean}`.
- `hideLabel={boolean}` has been removed.
- `children` are no longer accepted.
- `position={'left'|'right'}` has been replaced by `align={'left'|'right'}`. Please note that visual impact of these `'left'` and `'right'` values has been flipped (e.g. `position="left"` is equivalent to `align="right"`), and `align="right"` also aligns the toggle to the right of its parent container. Also applies for the `toggleAfterLabel=(boolean)` in Seek Asia Style Guide.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Toggle)

## Diff

### SEEK Style Guide

```diff
-<Toggle checked={true} />
+<Toggle on={true} />

-<Toggle position="left" />
+<Toggle align="right" />
```

### SEEK Asia Style Guide

```diff
-<Toggle checked={true} />
+<Toggle on={true} />

-<Toggle toggleAfterLabel={true} />
+<Toggle align="right" />
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/slidetoggle)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/slidetoggle)
