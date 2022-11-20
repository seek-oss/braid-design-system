---
'braid-design-system': minor
---

Expose Playroom config

This allows consuming packages (e.g. Metropolis) to enhance the Playroom experience by leveraging Braid's internal Playroom configuration.

**EXAMPLE USAGE:**
```jsx
// playroom.config.js
module.exports = {
  components: 'braid-design-system/playroom/components',
  snippets: 'braid-design-system/playroom/snippets',
  frameComponent: 'braid-design-system/playroom/FrameComponent',
  scope: 'braid-design-system/playroom/scope',
};
```
