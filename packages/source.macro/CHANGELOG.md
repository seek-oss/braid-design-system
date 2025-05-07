# @braid-design-system/source.macro

## 1.0.0

### Major Changes

- Run `prettier` on macro code output ([#1770](https://github.com/seek-oss/braid-design-system/pull/1770))

  **BREAKING CHANGE**:

  The code string returned by the macro is now formatted with `prettier` by default. The resulting code string may be different relative to previous versions of the macro, so please ensure it aligns with your expectations.

  Prettier formatting can be disabled via the `formatWithPrettier` configuration option2️⃣:

  ```js
  const babelTransformOptions = {
    plugins: [
      [
        require.resolve('babel-plugin-macros'),
        { source: { formatWithPrettier: false } },
      ],
    ],
  };
  ```

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
