---
'braid-design-system': major
---

---
updated:
  - Stack
  - Inline
---

**Stack, Inline:** Consumers need to render `li` elements

When setting `component` to `ul` or `ol` on `Stack` or `Inline`, consumers need to ensure they render children as `li` elements.
Previously Braid owned an intermediate HTML element, ensuring it was an `li` when required.
Moving to CSS gap means child elements are no longer being wrapped, requiring consumers to update their child elements to the correct HTML element, e.g. `li`.

**MIGRATION GUIDE:**
```diff
 <Stack component="ul">
-  <Text>Item 1</Text>
+  <Text component="li">Item 1</Text>
-  <Text>Item 2</Text>
+  <Text component="li">Item 2</Text>
 </Stack>
```
