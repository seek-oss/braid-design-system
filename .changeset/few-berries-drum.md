---
'braid-design-system': major
---

**BackgroundProvider** Removed in favour of setting a `background` of `customDark`/`customLight` directly on the `Box` that has the custom background color.

**MIGRATION GUIDE**

```diff
-<Box style={{ backgroundColor: 'purple' }}>
+<Box background="customDark" style={{ backgroundColor: 'purple' }}>
-   <BackgroundProvider value="UNKNOWN_DARK">
     <Text>Inverted text given dark context</Text>
-   </BackgroundProvider>
 </Box>
```
