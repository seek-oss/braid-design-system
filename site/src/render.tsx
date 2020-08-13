import { Render } from 'sku';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import dedent from 'dedent';
import { uniq, flatten, values } from 'lodash';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import * as themes from '../../lib/themes';
import { braidVersionToDate } from './getVersionDetails';
import { UpdateProvider, makeUpdateManager } from './App/UpdateProvider';

const skuRender: Render<RenderContext> = {
  renderApp: async ({ route }) => {
    const {
      IS_GITHUB_PAGES: isGithubPages,
      GITHUB_SHA: prSha,
      CI,
    } = process.env;
    const githubUrl = 'https://github.com/seek-oss/braid-design-system/tree/';
    const versionMap = await braidVersionToDate();

    const sourceUrlPrefix = `${githubUrl}${prSha || 'master'}`;
    const routerBasename = isGithubPages ? 'braid-design-system' : '';
    const playroomUrl = !CI
      ? 'http://127.0.0.1:8082'
      : `${routerBasename ? `/${routerBasename}` : ''}/playroom`;
    const today = new Date();
    const appConfig = {
      playroomUrl,
      sourceUrlPrefix,
      renderDate: today.getTime(),
      versionMap,
    };

    const config = {
      routerBasename,
      appConfig,
    };

    const updateManager = makeUpdateManager(today, versionMap);

    const html = renderToString(
      <StaticRouter context={{}} location={route} basename={routerBasename}>
        <ConfigProvider value={appConfig}>
          <UpdateProvider updateManager={updateManager}>
            <App />
          </UpdateProvider>
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

  renderDocument: ({ headTags, bodyTags, app: { html, publicPath } }) => {
    const webFontLinkTags = uniq(
      flatten(values(themes).map((theme) => theme.webFonts)).map(
        (font) => font.linkTag,
      ),
    ).join('');

    return dedent`
      <!doctype html>
      <html lang="en">
        <head>
          <title>BRAID</title>
          <meta charset="utf-8">
          <meta name="author" content="SEEK Group">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="robots" content="noindex">
          ${webFontLinkTags}
          ${headTags}
          <link rel="icon" type="image/png" sizes="16x16" href="${publicPath}favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="${publicPath}favicon-96x96.png" />
        </head>
        <body><div id="app">{{ html }}</div></body>
        ${bodyTags}
      </html>
    `.replace('{{ html }}', html); // Maintain indenting in 'pre' tags
  },
};

export default skuRender;
