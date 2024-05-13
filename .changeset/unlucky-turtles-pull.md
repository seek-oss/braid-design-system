---
'braid-design-system': major
---

---
updated:
  - Stack
---

Update `Stack` to use CSS gap for spacing between children. Hidden elements  will now be ignored by `Stack`'s spacing.

**EXAMPLE USAGE:**
```jsx
<Stack space="small">
  <Text>First line</Text>
  <HiddenVisually>This line is ignored by Stack spacing</HiddenVisually>
  <Text>Second line</Text>
</Stack>
```

However, hidden elements will not be ignored if `Stack` is set to a list component ([see example here]).

[see example here]: http://127.0.0.1:8082/#?code=N4Igxg9gJgpiBcIA8AhCAPABABwIZSgEsA7AcwF4AdEUgVwBd6YAnagPkuM0yQGV7cYANaYAznjAwqIdOgA2uZqRjtO3bnwHCxEqdQC2MIrX2qu6jQAkY%2BEqUxyYANxhzpAJnb9cxKIqiY3sJIAPTWtmQc5haagiLignogovq4cnJmFjEAKjDo9GwAYoTMovQOJDChuflRWepIloQEMMQAaoSitGlyAJ5smNkAFp2YAO6E6ZjEEOVDuC46iZiKELS%2BmIT0oU0t7Z3d6f1q9Tw1BbwwkBtyldV5BScxIUFCdQ0vWm%2BcTzyvS5JpIZjKYQO8YuEiGQHM5XB4vF8VqIVhUyphIPpsBBiK1tmEbFDSOCGv8EoDqCketR0RBMdjcdIIBkwb8cg8iiU0bccfdaqyGrtYPsuj1%2BoMRsiJlMZnMFjAAfLVusAlsds0hR0RUdiWzapdrgFuVUQucdTxPnFiaFXu9rV8oqE0OgoiAADQgehDGCGUQIADayRgMCEACkIAAjX0AXXdEygnt98D9AHYAGwADijAF8gA

**MIGRATION GUIDE:**

`Stack` spacing will no longer work as expected on the following browser versions:

- Chrome 83 and below,
- Edge 83 and below,
- Safari 14.0 and below, and
- Firefox 62 and below.

Consumers should consider their user base using these browser versions when upgrading to this version of `Stack`, in order to mitigate potential disruptions to the user experience.
