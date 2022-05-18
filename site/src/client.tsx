import React, { ReactNode, useEffect } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { App } from './App/App';
import { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import { initUpdates } from './App/Updates';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default (app: RenderContext) => {
  initUpdates(new Date(app.renderDate), app.versionMap, app.currentVersion);

  hydrate(
    <HeadProvider>
      <BrowserRouter basename={app.routerBasename}>
        <ConfigProvider value={app.appConfig}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </ConfigProvider>
      </BrowserRouter>
    </HeadProvider>,
    document.getElementById('app'),
  );
};
