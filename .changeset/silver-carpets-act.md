---
'braid-design-system': minor
---

---
updated:
  - seekJobs
---

**seekJobs:** Use Tahoma for Thai fallback font

Currently in the `seekJobs` theme, the fallback font for the Thai character set resolves to the default system font which differs by operating system.
By choosing a deterministic fallback that is available across operating systems, we can use [Capsize] to [improve the alignment] with the SEEK Sans web font, and reduce Cumulative Layout Shift for experiences that use Thai.

Additionally, adding `sans-serif` as an ultimate fallback in the event that we ever fall all the way through the stack on an obscure operating system.

[Capsize]: https://seek-oss.github.io/capsize/
[improve the alignment]: https://github.com/seek-oss/capsize?tab=readme-ov-file#createfontstack
