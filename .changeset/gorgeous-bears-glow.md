---
'braid-design-system': major
---

Improved trimming of white space around text


## Breaking Changes
Improved the mechanism used to trim the white space around text. This will have subtle white space changes throughout the UI, but will largely just be improvements on balance of space around text.

As a result of adopting the new technique it is no longer feasible to maintain the `_LEGACY_SPACE_` fallback on `Heading` and `Text`.


### Removed _LEGACY_SPACE_ from  `Heading` & `Text`
The `_LEGACY_SPACE_` prop was provided to support consumers migrating to `v14` when the white space cropping and layout components were introduced. This has now been removed to allow us to further improve our techniques used.

Migrating off this prop will require consumers to perform the following steps:
- Remove the usage of `_LEGACY_SPACE_` on a component
- Conduct a visual review of the impact (component will appear closer to neighbouring elements)
- Use existing layout components, e.g. `Stack`, to define/control the reintroduction of the desired space.

Any issues, please reach out to the team as we are happy to help support consumers in migrating.

### Theme structure changes
#### Text and Heading definitions
There have been strutural theme changes for `heading` and `text` definitions to support the defining of `capHeight` in the system. A definition will now have either `fontSize` or `capHeight`, eg:

```diff
{
  text: {
    standard: {
      mobile: {
-        size: 16,
+        fontSize: 16, // or `capHeight` if using the new technique.
        rows: 6
      }
    }
  }
}
```

This is likely to not affect consumers, unless using these values off the theme explicitly in custom treat files.


#### Descender and Cap Height scales
Instead of the calculated values of `capHeightScale` and `decenderHeightScale`, a theme now accepts `fontMetrics`—a structure the represents the metadata from the font itself.

```diff
-const capHeight = 24 * theme.typography.capHeightScale;
+const capHeight = 24 * (theme.typography.fontMetrics.capHeight / theme.typography.fontMetrics.unitsPerEm);
```

```diff
-const descender = 24 * theme.typography.decenderHeightScale;
+const descender = 24 * (Math.abs(theme.typography.fontMetrics.descent) / theme.typography.fontMetrics.unitsPerEm);
```

