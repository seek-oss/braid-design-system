---
'@braid-design-system/docs-ui': patch
---

---
updated:
  - MenuButton
---

**MenuButton:** Improve virtual touch target positioning for narrow elements

To maintain accessibility for smaller interactive elements, Braid uses a virtual touch target to maintain the minimum hit area.
This change ensures that the virtual element is always centered to the visual target, in particular when the width of the visual target is narrower than the minimum hit area.
