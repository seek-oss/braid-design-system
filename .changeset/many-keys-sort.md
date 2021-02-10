---
'braid-design-system': patch
---

---
updated:
  - TextLink
  - TextLinkButton
---

**TextLink,TextLinkButton:** Deprecate inside of Actions in favour of transparent Button

Usage of `TextLink` or `TextLinkButton` inside of an `Actions` container should now use a `Button` with a `variant` of `transparent`.

Previously when a `TextLink` or `TextLinkButton` was placed inside of an `Actions` container, it would be given a custom layout to align with the `Button` elements. We are deprecating this behaviour.

**MIGRATION GUIDE:**
Going forward `Actions` should only contain `Button` elements. To migrate towards this, both `TextLink` and `TextLinkButton` should now use either a `ButtonLink` or `Button` respectively, with a `variant` or `transparent`.

#### TextLink
Can be replicated with a `variant` of `standard` (default).
```diff
<Actions>
  <Button>...</Button>
- <TextLink href="...">...</TextLink>
+ <ButtonLink href="..." variant="transparent">...</ButtonLink>
</Actions>
```

#### TextLinkButton
```diff
<Actions>
  <Button>...</Button>
- <TextLinkButton onClick={...}>...</TextLinkButton>
+ <Button onClick={...} variant="transparent">...</Button>
</Actions>
```
