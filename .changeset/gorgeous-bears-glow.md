---
'braid-design-system': major
---

Improved trimming of white space around text

Migrated from our custom [Basekick](https://github.com/michaeltaranto/basekick) implementation to [🛶 Capsize](https://seek-oss.github.io/capsize/) to more accurately trim the white space around text. This will have subtle white space changes throughout the UI, but will largely just be improvements to the balance of space around text.

**BREAKING CHANGES**

**Heading/Text: Removed _LEGACY_SPACE_**

The `_LEGACY_SPACE_` prop was provided to support consumers migrating to [`v14`](https://github.com/seek-oss/braid-design-system/releases/tag/v14.0.0) when the white space cropping and layout components were originally introduced. This has now been removed to allow us to further improve on our approach.

Migrating off this prop will require consumers to perform the following steps:
- Remove the usage of `_LEGACY_SPACE_` on a component
- Conduct a visual review of the impact (component will appear closer to neighbouring elements)
- Use existing layout components, e.g. `Stack`, to define/control the reintroduction of the desired space.

Any issues, please reach out to the team as we are happy to help support consumers in migrating.

**Theme Tokens: Text and Heading definitions**

There have been strutural theme changes for `heading` and `text` definitions to support the defining of `capHeight` in the system. Previously a definition contained `size` that was the specified font size inclusive of surrounding white space.

A definition now has `capHeight` which is representative of the visual height, supporting improved alignment with other elements like, icons etc.

```diff
{
  text: {
    standard: {
      mobile: {
-        size: 16,
+        capHeight: 11.43,
        rows: 6
      }
    }
  }
}
```

This is not likely to affect consumers, unless these theme values are used explicitly in custom treat files.


**Theme Tokens: Descender and Cap Height scales**

Instead of the calculated values of `capHeightScale` and `decenderHeightScale`, a theme now accepts `fontMetrics`—a structure that represents the metadata from the font itself.

```diff
-const capHeight = 24 * theme.typography.capHeightScale;
+const capHeight = 24 * (theme.typography.fontMetrics.capHeight / theme.typography.fontMetrics.unitsPerEm);
```

```diff
-const descender = 24 * theme.typography.decenderHeightScale;
+const descender = 24 * (Math.abs(theme.typography.fontMetrics.descent) / theme.typography.fontMetrics.unitsPerEm);
```
