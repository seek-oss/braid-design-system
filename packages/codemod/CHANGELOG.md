# @braid-design-system/codemod

## 1.0.2

### Patch Changes

- Updating React dependencies to v19 ([#1822](https://github.com/seek-oss/braid-design-system/pull/1822))

## 1.0.1

### Patch Changes

- Bumping ink dependency to v5 ([#1809](https://github.com/seek-oss/braid-design-system/pull/1809))

## 1.0.0

### Major Changes

- @braid-design-system/codemod has been moved to its own package. ([#1801](https://github.com/seek-oss/braid-design-system/pull/1801))

  **Note: This is technically a breaking change for local migrations, but we expect minimal impact so are releasing this as a minor version change.**

  The `braid-upgrade` command is now no longer part of the `braid-design-system` package. Instead, `braid-upgrade` can be run via the `@braid-design-system/codemod` package.

  #### Example

  ```bash
  pnpm dlx @braid-design-system/codemod v31.11 "**/*.{ts,tsx}"
  ```
