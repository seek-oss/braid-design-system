---
'braid-design-system': minor
---

---
updated:
  - Card
---

**Card:** Add `rounded` and `roundedAbove` support

Card corners can be rounded by providing the `rounded` prop.

Alternatively, rounding may be applied responsively using the `roundAbove` prop, and providing either `mobile` or `tablet`. This enables cards edges to be softened on larger screens, but squared off if it runs full bleed on smaller devices.

**EXAMPLE USAGE:**
```jsx
<Card rounded>
  ...
</Card>
```
or
```jsx
<Card roundedAbove="mobile">
  ...
</Card>
```
