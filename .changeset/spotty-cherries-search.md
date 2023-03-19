---
'braid-design-system': patch
---

Prevent wrong entry point paths from appearing as suggestions in VS Code.

For example, wanting to use [Braid's CSS variables](https://seek-oss.github.io/braid-design-system/css/vars) (`vars`) VS Code would suggest `braid-design-system/dist/css` instead of `braid-design-system/css`.
