---
'braid-design-system': major
---

Playroom entries

**EXAMPLE USAGE:**

```jsx
// playroom.config.js
module.exports = {
  frameComponent: require.resolve('braid-design-system/playroom/FrameComponent'),
  components: require.resolve('braid-design-system/playroom/components'),
  snippets: require.resolve('braid-design-system/playroom/snippets'),
  scope: require.resolve('braid-design-system/playroom/scope'),
};
