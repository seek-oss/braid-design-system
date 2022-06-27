---
'braid-design-system': minor
---
---
updated:
  - Rating
---

**Rating:** Add `variant` prop and deprecate `showTextRating`

Provide the `variant` prop to allow customising the appearance. This supports the new `minimal` appearance, which presents a single star alongside the text rating.

Also adding the `starsOnly` variant as a replacement for the now deprecated `showTextRating={false}`.

**EXAMPLE USAGE:**
```jsx
<Rating rating={3.7} variant="minimal" />
```

**MIGRATION GUIDE:**

The `showTextRating` prop is now deprecated. If you were using this previously, please migrate to the new `variant` prop using `starsOnly`.

```diff
<Rating
  rating={3.7}
- showTextRating={false}
+ variant="starsOnly"
/>
```
