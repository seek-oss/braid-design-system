---
'braid-design-system': major
---

Playroom imports are now formalised entries points rather than path imports, and as such no longer require the file path extensions to be provided.

**EXAMPLE USAGE:**
```jsx
// playroom.config.js
module.exports = {
  frameComponent: require.resolve('braid-design-system/playroom/FrameComponent'),
  components: require.resolve('braid-design-system/playroom/components'),
  snippets: require.resolve('braid-design-system/playroom/snippets'),
  scope: require.resolve('braid-design-system/playroom/scope'),
};
```
