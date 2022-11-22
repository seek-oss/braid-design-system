---
'braid-design-system': minor
---

Expose Playroom config

This allows consuming packages (e.g. Metropolis) to enhance the Playroom experience by leveraging Braid's internal Playroom configuration.

**EXAMPLE USAGE:**
```jsx
// playroom.config.js
module.exports = {
  frameComponent: require.resolve('braid-design-system/playroom/FrameComponent.tsx'),
  components: require.resolve('braid-design-system/playroom/components.ts'),
  snippets: require.resolve('braid-design-system/playroom/snippets.ts'),
  scope: require.resolve('braid-design-system/playroom/scope.ts'),
};
```
