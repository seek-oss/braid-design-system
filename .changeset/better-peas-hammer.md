---
'braid-design-system': minor
---

---
updated:
  - Rating
---

**Rating:** Add support for a review count

`reviewText` is a full phrase, so the caller controls translation and pluralisation. Provide `reviewLink` to render it as a link. `onClick` is optional and requires `reviewLink`.

**EXAMPLE USAGE:**

```jsx
<Rating
  rating={4.2}
  reviewText="128 reviews"
  reviewLink="/reviews"
/>
```