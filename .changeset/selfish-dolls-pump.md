---
'braid-design-system': major
---

---
updated:
  - TextLink
  - TextLinkButton
---

**TextLink, TextLinkButton:** Remove support inside `Actions` component

Removing support for `TextLink` and `TextLinkButton` components inside of `Actions`. This was previously deprecated back in [v29.26.0](https://seek-oss.github.io/braid-design-system/releases#29.26.0) in favour of using the `transparent` `variant` of [`ButtonLink`](https://seek-oss.github.io/braid-design-system/components/Button#variants).

**MIGRATION GUIDE**

```diff
  <Actions>
    <Button>...</Button>
-   <TextLink href="...">...</TextLink>
+   <ButtonLink href="..." variant="transparent">...</ButtonLink>
  </Actions>
```
