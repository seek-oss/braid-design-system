import React, { ReactNode, useEffect, useRef } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { App } from './App/App';
import { RenderContext } from './types';
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

  hydrate(
    <HeadProvider>
      <BrowserRouter basename={app.routerBasename}>
        <ConfigProvider value={app.appConfig}>
          <ScrollManager>
            <App />
          </ScrollManager>
        </ConfigProvider>
      </BrowserRouter>
    </HeadProvider>,
    document.getElementById('app'),
  );
};
