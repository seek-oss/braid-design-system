import type { Render } from 'sku';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import dedent from 'dedent';
import { App } from './App/App';
import type { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import * as themes from 'braid-src/lib/themes';
import { braidVersionToDate } from './getVersionDetails';
import { initUpdates } from './App/Updates';
import packageJson from 'braid-design-system/package.json';
import { colorModeCheck } from 'braid-src/entries/color-mode/local-storage';

const { version } = packageJson;

const skuRender: Render<RenderContext> = {
  renderApp: async ({ route: inputRoute }) => {
    const {
      BASE_NAME: routerBasename = '',
      BRANCH_NAME: branchName = '',
      HEAD_BRANCH_NAME: headBranchName,
      GITHUB_SHA: prSha,
      CI,
    } = process.env;
    const githubUrl = 'https://github.com/seek-oss/braid-design-system/tree/';
    const versionMap = await braidVersionToDate();

    const sourceUrlPrefix = `${githubUrl}${prSha || 'master'}`;

    const route = `${routerBasename}${inputRoute}`;

    const playroomUrl = !CI
      ? 'http://127.0.0.1:8082'
      : `${routerBasename}/playroom`;

    const appConfig = {
      playroomUrl,
      sourceUrlPrefix,
      branchName,
      headBranchName: headBranchName || 'master',
    };

    const today = new Date();
    const helmetContext: RenderContext['helmetContext'] = {};

    const config = {
      routerBasename,
      appConfig,
      renderDate: today.getTime(),
      versionMap,
      currentVersion: version,
      helmetContext,
    };

    initUpdates(today, versionMap, version);

    const html = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={route} basename={routerBasename}>
          <ConfigProvider value={appConfig}>
            <App />
          </ConfigProvider>
        </StaticRouter>
      </HelmetProvider>,
    );

    return {
      html,
      ...config,
    };
  },

  provideClientContext: ({
    app: { routerBasename, appConfig, renderDate, versionMap, currentVersion },
  }) => ({
    routerBasename,
    appConfig,
    renderDate,
    versionMap,
    currentVersion,
  }),

  renderDocument: ({ headTags, bodyTags, app: { html, helmetContext } }) => {
    const webFontLinkTags = Array.from(
      new Set(
        Object.values(themes)
          .flatMap((theme) => theme.webFonts)
          .map((font) => font.linkTag),
      ),
    ).join('');
    const { helmet } = helmetContext;

    return dedent`
      <!doctype html>
      <html lang="en">
        <head>
          ${colorModeCheck('braid-docs')}
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${webFontLinkTags}
          ${headTags}
        </head>
        <body><div id="app">{{ html }}</div></body>
        ${bodyTags}
      </html>
    `.replace('{{ html }}', html); // Maintain indenting in 'pre' tags
  },
};

export default skuRender;
