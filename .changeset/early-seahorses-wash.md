---
'braid-design-system': patch
---
Allow `Badge` to take arrays of values.

Previously, `Badge` only accepted a `string` as children, to prevent the use of other components inside a `Badge`.

However, inserting some kind of variable inside the `Badge` will be typed as array of strings, which means the following very reasonable use case was not allowed:

```tsx
<Badge>{jobs.length} Jobs</Badge>
// Error: Type '{ children: string[]; }' is not assignable to type 'BadgeProps'.
```

This change allows `Badge` to accept arrays of strings or numbers, which will be joined with no separator to respect the spacing in the JSX.