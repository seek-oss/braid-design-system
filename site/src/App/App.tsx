// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import React, { StrictMode, useEffect } from 'react';
import { Route } from 'react-router';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '../../../lib/reset';
import { BraidProvider, Box } from '../../../lib/components';
import { Home } from './Home/Home';
import { Documentation } from './Documentation/Documentation';
import * as styles from './App.treat';

const routes = [
  { path: '/', name: 'Home', exact: true, Component: Home },
  {
    path: '/(guides|components|foundations)',
    name: 'Documentation',
    exact: false,
    Component: Documentation,
  },
];

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollBehavior' in window.document.documentElement.style) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <BraidProvider theme={themes.wireframe}>
      <div>
        {routes.map(({ path, exact, Component }) => (
          <Route key={path} exact={exact} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={350}
                classNames={{ ...styles }}
                unmountOnExit
              >
                <StrictMode>
                  <Box
                    position="absolute"
                    className={styles.transitionContainer}
                  >
                    <Component />
                  </Box>
                </StrictMode>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </BraidProvider>
  );
};
