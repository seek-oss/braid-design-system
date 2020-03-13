---
'braid-design-system': minor
---

Only show focus rings on buttons for keyboard navigation.

This impacts the following components:

- `Button`
- `ButtonRenderer`
- `OverflowMenu`

Browsers automatically show focus rings on buttons when clicking on them, even though (for our purposes, at least) they're undesirable from a visual design perspective and redudant from a UX perspective.

We now automatically hide these focus rings if the user has moved their mouse, indicating that they're not navigating via the keyboard. However, to maintain keyboard accessibility, we reinstate these focus rings whenever the keyboard is used. Most typically, this ensures that you'll see focus rings when tabbing around the UI, even if you've previously used the mouse.

**MIGRATION GUIDE**

No public APIs are affected by this, but you may find that this causes unit test failues that look like this:

> Warning: An update to X inside a test was not wrapped in act(...).

If this is the case, you should replace `BraidProvider` in your tests with `BraidTestProvider`.

```diff
-<BraidProvider theme={wireframe}>
+<BraidTestProvider>
```
