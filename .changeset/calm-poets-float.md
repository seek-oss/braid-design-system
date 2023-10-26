---
'braid-design-system': patch
---

The Braid Provider contains some code to check that it's running in a browser context (otherwise a BraidTestProvider should be used).

Part of this check was looking to see if there was a `navigator` object, which was not available in Node.
If there were, it would check the `userAgent` to determine if it was inside jsdom.

Node 21 has a `navigator` object, but it doesn't have a `userAgent` property, so this check was failing (cannot read property 'indexOf' of undefined).

The userAgent check now includes an optional chaining operator to prevent this error.
