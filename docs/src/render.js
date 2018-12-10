import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import dedent from 'dedent';
import App from './App/App';

export default {
  renderApp: ({ route }) => {
    const {
      TRAVIS_BRANCH: branch,
      TRAVIS_PULL_REQUEST_SHA: prSha
    } = process.env;
    const isGithubPages = branch === 'master' && !prSha;
    const githubUrl = 'https://github.com/seek-oss/braid-design-system/tree/';

    const config = {
      routerBasename: isGithubPages ? 'braid-design-system' : '',
      sourceUrlPrefix: `${githubUrl}${prSha || 'master'}`
    };

    const html = renderToString(
      <StaticRouter
        context={{}}
        location={route}
        basename={config.routerBasename}
      >
        <App sourceUrlPrefix={config.sourceUrlPrefix} />
      </StaticRouter>
    );

    const publicPath = isGithubPages ? '/braid-design-system/' : '/';

    return { html, config, publicPath };
  },

  renderDocument: ({ headTags, bodyTags, app: { html, config, publicPath } }) =>
    dedent`
      <!doctype html>
      <html lang="en">
        <head>
          <title>BRAID</title>
          <meta charset="utf-8">
          <meta name="author" content="SEEK Group">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="robots" content="noindex">
          ${headTags}
          <link rel="icon" type="image/png" sizes="16x16" href="${publicPath}favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="${publicPath}favicon-96x96.png" />
        </head>
        <body><div id="app">{{ html }}</div></body>
        <script>window.CONFIG = ${JSON.stringify(config)};</script>
        ${bodyTags}
      </html>
    `.replace('{{ html }}', html) // Maintain indenting in 'pre' tags
};
