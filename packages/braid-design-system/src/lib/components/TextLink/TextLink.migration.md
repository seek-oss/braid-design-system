# TextLink Migration Guide

## API Changes

- No longer supports the `component` prop. Supported components are either an `anchor` element via [`TextLink`](https://seek-oss.github.io/braid-design-system/components/TextLink) or a `button` element via [`TextLinkButton`](https://seek-oss.github.io/braid-design-system/components/TextLinkButton).
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/TextLink)

## TBD

- `chevron={'up' | 'down' | 'left' | 'right'}`

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/textlink)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/textlink)
