---
'braid-design-system': patch
---

---
updated:
  - Badge
---

**Badge**: Allow `Badge` to take arrays of values

Previously, `Badge` only accepted a `string` as children, to prevent the use of other components inside a `Badge`.

However, when a variable is included with text inside the `Badge`, the children property is interpreted as an array. This prevents a very reasonable use case from being allowed:

```tsx
<Badge>{jobs.length} Jobs</Badge>
// Error: Type '{ children: string[]; }' is not assignable to type 'BadgeProps'.
```

This change allows `Badge` to accept a string, number, or array thereof.