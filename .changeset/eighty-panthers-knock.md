---
'braid-design-system': patch
---

Hidden: Infer 'inline' prop when nested inside Text or Heading

Currently, if you want to hide content using the `Hidden` component in an inline context (e.g. hiding part of a sentence), you need to remember to set the `inline` boolean prop.

Since most usages of this feature are within text, we now infer this for you automatically within the context of a `Text` or `Heading` component.

**MIGRATION GUIDE**

This change is not strictly required, but you can now clean up your code like this:

```diff
-<Text>The end of this sentence is... <Hidden inline below="tablet">hidden on mobile.</Hidden>
+<Text>The end of this sentence is... <Hidden below="tablet">hidden on mobile.</Hidden>
```
