# Heading Migration Guide

## API Changes

- Extracted from `Text` into a standalone component.
- Deprecated all existing size and weight variants in favour of `level={'1' | '2' | '3'}` and `weight={'regular' | 'weak'}`. Please note that this is a breaking change to our design language. When migrating, try to match existing styling as much as possible in consultation with your local designer.
- Removed `baseline={boolean}`.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/Heading)

## TBD

- `color={string}`

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/text)
- [SEEK Asia Style Guide](https://seekinternational.github.io/seek-asia-style-guide/text)
