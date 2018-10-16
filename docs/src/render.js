import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import dedent from 'dedent';
import App from './App/App';
import * as components from '../../lib/components';

const template = ({ publicPath, location }) => {
  const html = renderToString(
    <StaticRouter
      context={{}}
      location={location}
      basename={process.env.ROUTER_BASENAME}
    >
      <App />
    </StaticRouter>
  );

  return dedent`
    <!doctype html>
    <html lang="en">
      <head>
      <title>BRAID</title>
      <meta charset="utf-8">
      <meta name="author" content="SEEK Group">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="robots" content="noindex">
      <style type="text/css">html, body { margin: 0; }</style>
      <link rel="stylesheet" type="text/css" href="${publicPath}style.css" />
      <link rel="icon" type="image/png" sizes="16x16" href="${publicPath}favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="${publicPath}favicon-96x96.png" />
      </head>
      <body><div id="app">{{ html }}</div></body>
      <script src="${publicPath}main.js"></script>
    </html>
  `.replace('{{ html }}', html); // Maintain indenting in 'pre' tags
};

export default ({ publicPath }) => {
  const componentNames = Object.keys(components)
    .filter(x => !/icon/i.test(x))
    .sort();

  return {
    '/': template({ publicPath, url: '/' }),
    ...Object.assign(
      ...componentNames.map(componentName => {
        const location = `/components/${componentName}/`;

        return {
          [location]: template({ publicPath, location })
        };
      })
    )
  };
};
