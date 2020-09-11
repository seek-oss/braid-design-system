---
'braid-design-system': minor
---

---
new:
  - Announcement 
---

Add Announcement component

Announces extra information to screen reader users without stealing focus (using aria-live). This is useful for giving extra context to complex interactive components. 

**EXAMPLE USAGE:**
```jsx
<Announcement>
    {shouldAnnounceMessage ? "Something happened" : null}
</Announcement>
```
