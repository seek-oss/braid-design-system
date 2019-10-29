// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import React, { StrictMode } from 'react';
import { Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';

import '../../../lib/reset';
import { BraidProvider, Box } from '../../../lib/components';
import { Home } from './Home/Home';
import { Components } from './Components/Components';
import * as styles from './App.treat';

const routes = [
  { path: '/', name: 'Home', exact: true, Component: Home },
  {
    path: '/(components|icons)',
    name: 'Components',
    exact: false,
    Component: Components,
  },
];

export const App = () => (
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
                <Box position="absolute" className={styles.transitionContainer}>
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
