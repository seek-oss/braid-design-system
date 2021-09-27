---
'braid-design-system': major
---

---
updated:
  - Box
  - atoms
  - vars
---

**Box, atoms, vars:** Add new colour tokens and remove some existing tokens.

Simplifies the semantics of the colour-based tokens to support upcoming colour mode work. Introduces a number of new property values to `backgroundColor` and `borderColor`, subsequently affecting the apis on `Box` and `atoms`.

### Token changes
#### New
- **backgroundColor:** `surface`, `neutralSoft`
- **borderColor:** `neutral`, `neutralInverted`, `neutralLight`

#### Removed
- **backgroundColor:** `card`, `formAccentDisabled`, `input`, `inputDisabled`, `selection`
- **borderColor:** `formHover`, `standard`, `standardInverted`

### Migration Guide
#### `Box` backgrounds
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

#### `Box` boxShadows
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

#### `vars`
```diff
- vars.borderColor.standard
+ vars.borderColor.neutralLight

- vars.borderColor.standardInverted
+ vars.borderColor.neutralInverted

- vars.borderColor.formHover
+ vars.borderColor.formAccent
```

#### `atoms`
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
