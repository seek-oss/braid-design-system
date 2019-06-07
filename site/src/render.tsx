import { Render } from 'sku';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import dedent from 'dedent';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';

const skuRender: Render<RenderContext> = {
  renderApp: ({ route }) => {
    const {
      TRAVIS_BRANCH: branch,
      TRAVIS_PULL_REQUEST_SHA: prSha,
      CI,
    } = process.env;
    const isGithubPages = branch === 'master' && !prSha;
    const githubUrl = 'https://github.com/seek-oss/braid-design-system/tree/';

    const sourceUrlPrefix = `${githubUrl}${prSha || 'master'}`;
    const routerBasename = isGithubPages ? 'braid-design-system' : '';
    const playroomUrl = !CI
      ? 'http://localhost:8082'
      : `${routerBasename ? `/${routerBasename}` : ''}/playroom`;
    const appConfig = {
      playroomUrl,
      sourceUrlPrefix,
    };

    const config = {
      routerBasename,
      appConfig,
    };

    const html = renderToString(
      <StaticRouter context={{}} location={route} basename={routerBasename}>
        <ConfigProvider value={appConfig}>
          <App />
        </ConfigProvider>
      </StaticRouter>,
    );

    const publicPath = isGithubPages ? '/braid-design-system/' : '/';

    return {
      html,
      publicPath,
      ...config,
    };
  },

  provideClientContext: ({ app: { routerBasename, appConfig } }) => ({
    routerBasename,
    appConfig,
  }),

  renderDocument: ({ headTags, bodyTags, app: { html, publicPath } }) =>
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
        ${bodyTags}
      </html>
    `.replace('{{ html }}', html), // Maintain indenting in 'pre' tags
};

export default skuRender;
