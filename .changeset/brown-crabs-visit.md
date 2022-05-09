---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Improve Button `bleed`

Previously the `bleedY` prop allowed the background of `Button` to bleed vertically into the surrounding layout. This worked well for all variants except `transparent`, which needed to bleed horizontally as well.

To support this we have introduced the `bleed` prop which will apply the bleed based on the `variant`. We have also deprecated `bleedY` which will be removed in a future release.


**EXAMPLE USAGE:**
```diff
 <Button
-  bleedY
+  bleed
   {...}
 >
   Button
 </Button>
```

**MIGRATION GUIDE**

Migration from `bleedY` to `bleed` can be automated by running the Braid upgrade command, passing the `v31.11` version. You must provide a glob to target your project’s source files. For example:

```
yarn braid-upgrade v31.11 "**/*.{ts,tsx}"
```

It is recommended to visually review the any `Button` usage with the `transparent` variant, to ensure the layout is as expected.
