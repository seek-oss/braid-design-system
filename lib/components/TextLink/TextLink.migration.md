# TextLink Migration Guide

## API Changes

- No longer supports the `component` prop. If you need to render a custom component, use [`TextLinkRenderer`](https://seek-oss.github.io/braid-design-system/components/TextLinkRenderer) instead.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/TextLink)

## TBD

- `chevron={'up' | 'down' | 'left' | 'right'}`

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/textlink)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/textlink)
