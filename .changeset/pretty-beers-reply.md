---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
---

**Button,ButtonLink:** Add variant to Button and deprecate weight

Introduces a new `variant` prop to `Button`/`ButtonLink` giving consumers a single prop to use for selecting the visual style of the button. Choose from `solid` (default), `ghost`, `soft` or `transparent`. The colour of the button is now consistently controlled via the `tone` prop, with supported values being `brandAccent`, `critical` or `undefined`.

As a result the `weight` prop is now deprecated. See the migration guide below.

**EXAMPLE USAGE:**
```jsx
<Inline space="small" collapseBelow="desktop">
  <Button>Solid</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="transparent">Transparent</Button>
</Inline>
```

**MIGRATION GUIDE:**
The `weight` prop is now deprecated. If you are not specifying a `weight` there is no change required.

If you are, each weight can be migrated as follows:

#### Regular
Can be replicated with a `variant` of `solid` (default).
```diff
-<Button weight="regular">...</Button>
+<Button variant="solid">...</Button>
```

Given it is the default `variant`, you could also choose to simply remove the `weight` prop.
```diff
-<Button weight="regular">...</Button>
+<Button>...</Button>
```

#### Strong
Can be replicated with a `variant` of `solid` (default), with a `tone` of `brandAccent`.
```diff
-<Button weight="strong">...</Button>
+<Button tone="brandAccent">...</Button>
```

#### Weak
Can be replicated with a `variant` of `ghost`.
```diff
-<Button weight="weak">...</Button>
+<Button variant="ghost">...</Button>
```


