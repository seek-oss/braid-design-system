import { Render } from 'sku';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import dedent from 'dedent';
import { uniq, flatten, values } from 'lodash';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import * as themes from 'braid-design-system/lib/themes';
import { braidVersionToDate } from './getVersionDetails';
import { initUpdates } from './App/Updates';
import packageJson from '../../package.json';
import { __experimentalDarkMode__ } from 'braid-design-system/color-mode';

const { version } = packageJson;

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
    const appConfig = {
      playroomUrl,
      sourceUrlPrefix,
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
    const webFontLinkTags = uniq(
      flatten(values(themes).map((theme) => theme.webFonts)).map(
        (font) => font.linkTag,
      ),
    ).join('');
    const { helmet } = helmetContext;

    return dedent`
      <!doctype html>
      <html lang="en">
        <head>
          ${__experimentalDarkMode__}
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
