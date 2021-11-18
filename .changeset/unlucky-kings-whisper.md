---
'braid-design-system': major
---

---
updated:
  - Box
  - atoms
  - vars
---

**Box, atoms, vars:** Update theme colour tokens with improved semantics.

Simplifies the semantics of the colour-based tokens to support upcoming colour mode work. Changes to the property values on `backgroundColor` and `borderColor` has flow on affects to the apis on `Box` and `atoms`.


**TOKEN CHANGES**

**New**
- **backgroundColor:** `surface`, `neutralSoft`
- **borderColor:** `neutral`, `neutralInverted`, `neutralLight`

**Removed**
- **backgroundColor:** `card`, `formAccentDisabled`, `input`, `inputDisabled`, `selection`
- **borderColor:** `formHover`, `standard`, `standardInverted`

**MIGRATION GUIDE**

Migration can largely be automated by running the Braid upgrade command. You must provide a glob to target your project’s source files. For example:

```
yarn braid-upgrade v31 "**/*.{ts,tsx}"
```

---

It may be necessary to manually migrate code in some cases, here are the affected use cases:

**`Box` backgrounds**
```diff
- <Box background="card" />
+ <Box background="surface" />

- <Box background="formAccentDisabled" />
+ <Box background="neutralLight" />

- <Box background="input" />
+ <Box background="surface" />

- <Box background="inputDisabled" />
+ <Box background="neutralSoft" />

- <Box background="selection" />
+ <Box background="formAccentSoft" />
```

**`Box` boxShadows**
```diff
- <Box boxShadow="borderStandard" />
+ <Box boxShadow="borderNeutralLight" />

- <Box boxShadow="borderStandardInverted" />
+ <Box boxShadow="borderNeutralInverted" />

- <Box boxShadow="borderStandardInvertedLarge" />
+ <Box boxShadow="borderNeutralInvertedLarge" />

- <Box boxShadow="borderFormHover" />
+ <Box boxShadow="borderFormAccent" />
```

**`vars`**
```diff
- vars.borderColor.standard
+ vars.borderColor.neutralLight

- vars.borderColor.standardInverted
+ vars.borderColor.neutralInverted

- vars.borderColor.formHover
+ vars.borderColor.formAccent
```

**`atoms`**
```diff
 atoms({
-  boxShadow: 'borderStandard',
+  boxShadow: 'borderNeutralLight',
 });

 atoms({
-  boxShadow: 'borderStandardInverted',
+  boxShadow: 'borderNeutralInverted',
 });

 atoms({
-  boxShadow: 'borderStandardInvertedLarge',
+  boxShadow: 'borderNeutralInvertedLarge',
 });

 atoms({
-  boxShadow: 'borderFormHover',
+  boxShadow: 'borderFormAccent',
 });
```
