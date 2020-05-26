# BraidProvider Migration Guide

## API Changes

- **Braid no longer provides a global CSS reset.** Removing `StyleGuideProvider` from your application will remove these styles. You'll need to ensure that all primitive elements in your app that depended on this reset are rendered via Braid's [Box](https://seek-oss.github.io/braid-design-system/components/Box) component, e.g. `<h1>` becomes `<Box component="h1">`.

- **The `title`, `meta` and `link` props have been removed.** Managing head tags is no longer the responsibility of the design system.

  SEEK Style Guide used [react-helmet](https://github.com/nfl/react-helmet) to manage this internally if you'd like a smooth transition, e.g. `<StyleGuideProvider title="Hello world">` becomes `<Helmet title="Hello world">`.

- **You're no longer provided with a default page title.** If you were relying on this behaviour, you'll need to include these in your application manually. For reference, the AU title is `SEEK - Australia's no. 1 jobs, employment, career and recruitment site` and the NZ title is `Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site`.

- No longer accepts a `locale` prop as the provider doesn't manage anything locale-specific.

- The `fullScreen` prop has been removed. If this causes issues, please reach out to us.

## Diff

**Replacing primitive elements with [Box](https://seek-oss.github.io/braid-design-system/components/Box) to ensure CSS resets are still applied correctly:**

```diff
-<input type="checkbox" className={styles.checkbox}>
+<Box component="input" type="checkbox" className={styles.checkbox}>
```

**Replacing the provider and wiring up [react-helmet](https://github.com/nfl/react-helmet):**

```diff
-<StyleGuideProvider locale={locale} title={pageTitle} meta={meta} link={link}>
-  ...
-</StyleGuideProvider>;

+import seekAnz from 'braid-design-system/themes/seekAnz';
+import { Helmet } from 'react-helmet';
+
+<BraidProvider theme={seekAnz}>
+  <Helmet
+    title={
+      locale === 'AU'
+        ? "SEEK - Australia's no. 1 jobs, employment, career and recruitment site"
+        : "Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site"
+    }
+    meta={meta}
+    link={link}
+  />
+  ...
+</BraidProvider>;
```
