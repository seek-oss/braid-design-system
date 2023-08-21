---
'braid-design-system': minor
---

---
new:
  - Page
---

**Page:** Add component

The new `Page` component establishes a consistent page-level layout by managing the relationship between the footer and the main content.

By default, for pages with limited content the `footer` will at a minimum be placed at the bottom of the screen, pushed beyond as the page content grows.

For pages with dynamic content, it is recommended to place the footer out of view by setting the `footerPosition` prop to `belowFold` to prevent the footer from popping in and out of view when the page content changes, e.g. toggling between a loading indicator and content.

**EXAMPLE USAGE:**
```jsx
<Page footer={<Footer />}>
  <Header />
  {/* page content... */}
</Page>
```
