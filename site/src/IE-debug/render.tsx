import { Render } from 'sku';

const skuRender: Render<any> = {
  renderApp: () => {},
  renderDocument: ({ headTags, bodyTags }) => `
      <!doctype html>
      <html lang="en">
        <head>
          <title>BRAID</title>
          <meta charset="utf-8">
          <meta name="author" content="SEEK Group">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="robots" content="noindex">
          ${headTags}
        </head>
        <body>
        <div id="app"></div>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise"></script>
        ${bodyTags}
        </body>
      </html>
    `,
};

export default skuRender;
