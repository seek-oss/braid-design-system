import 'focus-visible';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App/App';
import { RenderConfig } from './types';

declare global {
  interface Window {
    CONFIG: RenderConfig;
  }
}

const { routerBasename, sourceUrlPrefix } = window.CONFIG;

export default () => {
  hydrate(
    <BrowserRouter basename={routerBasename}>
      <App sourceUrlPrefix={sourceUrlPrefix} />
    </BrowserRouter>,
    document.getElementById('app'),
  );
};
