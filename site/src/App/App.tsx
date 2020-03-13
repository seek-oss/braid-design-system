// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import React, { StrictMode } from 'react';
import { Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';

import '../../../lib/reset';
import { BraidProvider, Box, ToastProvider } from '../../../lib/components';
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

export const App = () => (
  <BraidProvider theme={themes.wireframe}>
    <ToastProvider>
      <Box height="full">
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
                    overflow="auto"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                  >
                    <Component />
                  </Box>
                </StrictMode>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Box>
    </ToastProvider>
  </BraidProvider>
);
