# @braid-design-system/source.macro

## 0.1.3

### Patch Changes

- Apply import order rules internally ([#1689](https://github.com/seek-oss/braid-design-system/pull/1689))

## 0.1.2

### Patch Changes

- Update Crackle CLI dependency ([#1480](https://github.com/seek-oss/braid-design-system/pull/1480))

## 0.1.1

### Patch Changes

- Preserve new lines in the output code ([#1372](https://github.com/seek-oss/braid-design-system/pull/1372))

  Before:

  ```ts
  const responsiveValue = useResponsiveValue();
  const isMobile = responsiveValue({
    mobile: true,
    tablet: false,
  });
  const isDesktopOrAbove = responsiveValue({
    mobile: false,
    desktop: true,
  });
  ```

  After:

  ```ts
  const responsiveValue = useResponsiveValue();

  const isMobile = responsiveValue({
    mobile: true,
    tablet: false,
  });

  const isDesktopOrAbove = responsiveValue({
    mobile: false,
    desktop: true,
  });
  ```

## 0.1.0

### Minor Changes

- Initial release of the `source.macro` package ([#1362](https://github.com/seek-oss/braid-design-system/pull/1362))
