---
'braid-design-system': minor
---

---
updated:
  - theme
---

**theme:** Expose web fonts `href` on runtime tokens

Extend the `webFonts` runtime token to include the `href` property containing the web font URL.
This enables custom handling of web fonts beyond injecting the pre-constructed `link` tag(s).

**EXAMPLE USAGE:**
```jsx
import seekJobs from 'braid-design-system/themes/seekJobs';

const webFontHrefs = seekJobs.webFonts.map(({ href }) => href);

// => [ "https://www.seek.com.au/static/shared-web/seeksans.css" ]
```
