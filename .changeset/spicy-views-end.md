---
'braid-design-system': patch
---

---
updated:
  - seekJobs
  - seekBusiness
---

**seekJobs, seekBusiness:** Increase medium font weight

The introduction of Traditional Chinese support means characters in this unicode range are rendered using the default `sans-serif` font.
The system fonts that handle these characters only cater for **regular** and **bold** weights, resulting in the `medium` weight of 500 falling back to 400 — resulting in loss of visual hierarchy.

By increasing the weight of `medium` to 600, it will now round up to 700 (`strong`) when the rendered font cannot satisfy `medium`.

This only affects `seekJobs` and `seekBusiness` themes rendering Traditional Chinese characters, all weights across other character sets remain unchanged.
