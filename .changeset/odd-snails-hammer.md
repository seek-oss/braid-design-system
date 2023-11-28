---
'braid-design-system': patch
---

This release fixes a bug where the reset module included all the tokens for all the themes.

Additionally, this release contains significant compilation fixes to ensure that only styles for the imported components are included in the generated CSS.
Previously, due to the default bundling behavior of Vite, styles for all Braid components were included in the generated CSS, regardless of which components were imported.

This should speed up compilation times and reduce the size of the generated CSS in consuming apps. Running `sku build` on a project created with `sku init` (without minification):

```
➜ hyperfine --setup 'pnpm install' --parameter-list BRAID_VERSION '32.14.0,fix-theme-side-effects' --prepare 'rm -rf node_modules/.cache; pnpm install braid-design-system@{BRAID_VERSION}' --command-name '{BRAID_VERSION}' 'pnpm build'

Benchmark 1: 32.14.0
  Time (mean ± σ):     23.679 s ±  1.601 s    [User: 32.462 s, System: 3.793 s]
  Range (min … max):   21.190 s … 26.328 s    10 runs

Benchmark 2: fix-theme-side-effects
  Time (mean ± σ):     21.823 s ±  1.619 s    [User: 30.121 s, System: 3.464 s]
  Range (min … max):   20.066 s … 25.553 s    10 runs

Summary
  fix-theme-side-effects ran
    1.09 ± 0.11 times faster than 32.14.0
```
