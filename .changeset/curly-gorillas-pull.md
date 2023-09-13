---
'braid-design-system': minor
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Default to ghost neutral in non-legacy themes

By default, a button now has a `neutral` tone and uses the `ghost` variant, allowing the visual prominence to be increased or decreased as required, enabling colour to be applied as accents and with purpose, rather than by default.

```jsx
<Button />
// => variant="ghost" & tone="neutral"
```

To compliment this, when a `tone` is purposefully applied, the default variant is becomes `solid` to maximise it’s impact — allowing the visual prominence to be reduced as needed.

```jsx
<Button tone="brandAccent" />
// => variant="solid" & tone="brandAccent"
```

### No change for `apac` and `seekBusiness` consumers

Given the fundamental change in approach to colour and usage of such a core component, this change has been isolated newer themes and **does not impact `apac` and `seekBusiness` consumers**.

These themes will continue to have a tone of `formAccent` and a `solid` variant by default, allowing consumers to adopt this new approach as part of the design uplift when migrating to an updated theme, e.g. `seekJobs`.
