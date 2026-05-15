---
'braid-design-system': minor
---

---
updated:
  - Dialog
---

**Dialog:** Add `coverImage` support

Add support for providing a URL for a cover image to display at the top of the Dialog via the `coverImage` prop.
The provided image must be compatible with the [CSS background-image “url” function].

**EXAMPLE USAGE:**
```jsx
<Dialog
  title="Cover Image"
  coverImage="https://placehold.co/1600x900/051A49/FFFFFF/png?text=​++++++16:9++++++​"
  open={true}
  onClose={() => {}}
>
  <Placeholder height={100} width="100%" label="Dialog Content" />
</Dialog>
```

[CSS background-image “url” function]: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-image
