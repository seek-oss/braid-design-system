import { palette } from '../../color/palette';

export const photoPlaceholderUrl = `data:image/svg+xml;base64,${Buffer.from(
  `<svg
xmlns="http://www.w3.org/2000/svg"
width="96"
height="96"
>
<rect fill="${palette.seekBlue[500]}" width="96" height="96" />
<circle fill="${palette.seekPink[400]}" cx="48" cy="38" r="18" />
<ellipse fill="${palette.seekPink[400]}" cx="48" cy="88" rx="32" ry="24" />
</svg>
`,
).toString('base64')}`;
