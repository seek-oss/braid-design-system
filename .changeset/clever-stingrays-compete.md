---
'braid-design-system': minor
---

---
updated:
  - Badge
---

**Badge:** Add `bleedY` prop

You can now choose to allow the badge’s background colour to bleed out into the surrounding layout, making it easier to align with other elements.

For example, we can align a badge to a [Heading](https://seek-oss.github.io/braid-design-system/components/Heading) element using an [Inline](https://seek-oss.github.io/braid-design-system/components/Inline), even though the badge is actually taller than the heading. If we didn’t use the `bleedY` prop in this case, the badge would introduce unwanted space above and below the heading.

```jsx
<Inline alignY="center" space="xsmall">
  <Heading level="4">Heading</Heading>
  <Badge bleedY tone="positive">
    New
  </Badge>
</Inline>
```
