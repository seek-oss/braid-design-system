---
'braid-design-system': minor
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Provide context data to onClose

The `onClose` handler now receives data to allow consumers to discern why the menu closed — either by exiting or selecting an action. See the [documentation](https://seek-oss.github.io/braid-design-system/components/MenuRenderer#menu-interactions) for more details.

**EXAMPLE USAGE:**
```jsx
<MenuRenderer
  onClose={(closeReason) => {
    // ...
  }}
/>
```
