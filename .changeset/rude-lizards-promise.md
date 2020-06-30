---
'braid-design-system': patch
---

Autosuggest: Fix suggestion double tap bug on iOS

Tapping a suggestion on iOS triggers the hover state rather than a selection, forcing users to tap a second time to select the suggestion.

This is due to the way that iOS simulates mouse events in a touch environment. If the document is updated during a `mouseover`, `mouseenter` or `mousemove` event, the subsequent `click` event is never fired. While it may seem counterintuitive, this ensures that touch users are able to see hover effects that make changes to the page.

To fix this, we now trigger our suggestion hover logic on `touchstart` so that the document doesn't change during mouse events, which then allows the `click` event to fire uninterrupted.
