import React, { type ReactNode, useEffect, useRef } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './App/App';
import type { RenderContext } from './types';
import { ConfigProvider } from './App/ConfigContext';
import { initUpdates } from './App/Updates';
import { useLocation } from 'react-router';

const ScrollManager = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const lastLocation = useRef<ReturnType<typeof useLocation>>(location);

  useEffect(() => {
    const hashChange = location.hash !== lastLocation.current.hash;
    const hashRemoved = hashChange && !location.hash;
    const pathChange = location.pathname !== lastLocation.current.pathname;
    let scrollTo = 0;
    const shouldScroll = pathChange || hashChange || hashRemoved;

    if (location.hash && hashChange) {
      const anchor = document.getElementById(location.hash.replace('#', ''));
      if (anchor && lastLocation.current.hash !== location.hash) {
        scrollTo = anchor.offsetTop;
      }
    }

    if (shouldScroll) {
      window.scrollTo(0, scrollTo);
    }
    lastLocation.current = location;
  }, [location]);

  return <>{children}</>;
};

export default (app: RenderContext) => {
  initUpdates(new Date(app.renderDate), app.versionMap, app.currentVersion);

  hydrateRoot(
    document.getElementById('app')!,
    <HelmetProvider>
      <BrowserRouter basename={app.routerBasename}>
        <ConfigProvider value={app.appConfig}>
          <ScrollManager>
            <App />
          </ScrollManager>
        </ConfigProvider>
      </BrowserRouter>
    </HelmetProvider>,
  );
};
