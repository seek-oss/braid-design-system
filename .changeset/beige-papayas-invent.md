---
'braid-design-system': patch
---

---
updated:
  - Rating
---

**Rating:** Only fill star for scores .75 and above

A star is only `filled` when the score is .75 and above. Fixes an issue where all scores .5 or above are shown as half filled stars.

**EXAMPLE USAGE:**
Now when a rating reaches .75 it will round up to a full star.

```jsx
<Rating rating={3.75} /> // 4 filled
```
