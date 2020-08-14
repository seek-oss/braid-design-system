import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import ScrollMemory from 'react-router-scroll-memory';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import { UpdateProvider, makeUpdateManager } from './App/Updates';

export default (app: RenderContext) => {
  const updateManager = makeUpdateManager(
    new Date(app.renderDate),
    app.versionMap,
    app.currentVersion,
  );

  hydrate(
    <BrowserRouter basename={app.routerBasename}>
      <ConfigProvider value={app.appConfig}>
        <UpdateProvider updateManager={updateManager}>
          <ScrollMemory />
          <App />
        </UpdateProvider>
      </ConfigProvider>
    </BrowserRouter>,
    document.getElementById('app'),
  );
};
