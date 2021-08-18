import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
// @ts-ignore
import ScrollMemory from 'react-router-scroll-memory';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import { initUpdates } from './App/Updates';

export default (app: RenderContext) => {
  initUpdates(new Date(app.renderDate), app.versionMap, app.currentVersion);

  hydrate(
    <HeadProvider>
      <BrowserRouter basename={app.routerBasename}>
        <ConfigProvider value={app.appConfig}>
          <ScrollMemory />
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </HeadProvider>,
    document.getElementById('app'),
  );
};
