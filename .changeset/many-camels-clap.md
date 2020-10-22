---
'braid-design-system': patch
---

---
updated:
  - Tabs
---

**Tabs:** Only scroll tabs when necessary on large screens

Previously, when there were enough tabs to require horizontal scrolling, we would always scroll the active tab to the left-hand side of the scroll container (with a slight offset). This was primarily designed as a mobile interaction, and in practice was found to be a bit unexpected on large screens.

Instead, when the tabs are scrollable on large screens, we now only scroll the active tab into view if it's partially off-screen or positioned too close to the edge of the scroll container. This ensures that automatic scrolling only occurs when absolutely necessary.
