export const coverImagePlaceholderUrl = `${`data:image/svg+xml;base64,${Buffer.from(
  `<svg
xmlns="http://www.w3.org/2000/svg"
height="450"
viewBox="0 0 800 450"
style="background: #051A49;"
>
<rect x="180" y="5" height="440" width="440" stroke="#E60278" stroke-width="10" fill="transparent" />
<circle cx="400" cy="225" r="80" fill="#E60278" />
</svg>
`,
).toString('base64')}`}`;
