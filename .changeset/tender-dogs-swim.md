---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - MenuRenderer
  - OverflowMenu
  - TooltipRenderer
---

**Autosuggest, MenuRenderer, OverflowMenu, TooltipRenderer**: Ensure `TooltipRenderer` is correctly positioned on Android devices

Additionally, adjust `TooltipRenderer` positioning at screen edges, removing extra edge spacing.
This ensures the tooltip arrow is more closely aligned with the trigger when the trigger is near the edge of the screen.