---
'braid-design-system': major
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Add `neutral` tone

Introduces a `neutral` tone for cases where actions need to be de-emphasised. As a result, there is a breaking change to the contextual design rules that invert buttons in dark containers.


**BREAKING CHANGE:**

A `Button` with a `variant` of `ghost`, `soft`, or `transparent` and no specified `tone` would previously invert when inside a dark container. Instead of using the inverted foreground colours, these cases will now result in a lighter version of the default tone, i.e. `formAccent`.

**MIGRATION GUIDE:**

To maintain previous behaviour, consumers should opt into the `neutral` tone.

```diff
 <Box background="brand" padding="gutter">
-   <Button variant="ghost">Click</Button>
+   <Button variant="ghost" tone="neutral">Click</Button>
 </Box>
```
