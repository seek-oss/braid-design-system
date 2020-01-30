# Tag Migration Guide

## Design Changes

- Tags no longer expand to "touchable" height (i.e. at least 44px) when an `onClear` function has been provided. Instead, an absolutely positioned element is used to increase the hit area without impacting the layout. You may need to revisit your design to ensure that it still looks correct.

## API Changes

- Renamed from `Pill` to `Tag`.
- Renamed the `onClose` prop to `onClear`.
- When providing an `onClear` function, you must also provide a `clearLabel` prop to maintain accessibility.
- The `buttonType` prop has been removed. The clear button is now always of type `"button"`.
- The `text` prop has been removed as this was a backwards compatibility layer. Tag content must always be provided as a child node.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API](https://seek-oss.github.io/braid-design-system/components/Tag).

## Diff

```diff
-<Pill>Content</Pill>
+<Tag>Content</Tag>

-<Pill onClose={() => { ... }}>Content</Pill>
+<Tag onClear={() => { ... }} clearLabel="Clear tag">Content</Tag>

-<Pill text="Content" />
+<Tag>Content</Tag>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/pill)
