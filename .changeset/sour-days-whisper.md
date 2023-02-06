---
'braid-design-system': patch
---

Whitelist only the required FontMetrics for theme tokens

The latest version of `FontMetrics` type in Capsize adds more properties, and we only populate the properties we require on the theme. Whitelisting the required properties to keep the themes explicit.
