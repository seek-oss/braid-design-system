import dedent from 'dedent';

export default ({ publicPath }) => dedent`
  <!doctype html>
  <html>
    <title>Braid</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">html, body { margin: 0; }</style>
    <link rel="stylesheet" type="text/css" href="${publicPath}style.css" />
    <body><div id="app" /></body>
    <script src="${publicPath}main.js"></script>
  </html>
`;
