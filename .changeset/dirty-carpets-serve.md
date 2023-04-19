---
'braid-design-system': minor
---

---
updated:
  - Text
  - Heading
---

**Text, Heading:** Add `maxLines` support

Provide support for limiting the number of lines shown by a `Text` or `Heading` component.

**EXAMPLE USAGE:**
```jsx
<Text maxLines={3}>
  ...
</Text>
```

**MIGRATION:**

With the addition of this feature, the `truncate` prop is now deprecated and will be removed in a future release.
Existing consumers should start migrating as below:

```diff
 <Text
-   truncate
+   maxLines={1}
 />
```
