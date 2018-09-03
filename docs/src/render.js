import dedent from 'dedent';

export default ({ publicPath }) => dedent`
  <!doctype html>
  <html>
    <title>Braid</title>
    <link rel="stylesheet" type="text/css" href="${publicPath}style.css" />
    <body><div id="app" /></body>
    <script src="${publicPath}main.js"></script>
  </html>
`;
