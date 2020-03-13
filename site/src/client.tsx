import 'focus-visible';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import ScrollMemory from 'react-router-scroll-memory';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';

export default (app: RenderContext) => {
  hydrate(
    <BrowserRouter basename={app.routerBasename}>
      <ConfigProvider value={app.appConfig}>
        <ScrollMemory />
        <App />
      </ConfigProvider>
    </BrowserRouter>,
    document.getElementById('app'),
  );
};
