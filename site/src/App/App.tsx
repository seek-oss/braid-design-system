// Import all themes up front so CSS overrides work
import * as themes from '../../../lib/themes';
import React from 'react';
import { withRouter, Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';

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

export const App = withRouter(() => (
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
              <Box position="absolute" className={styles.transitionContainer}>
                <Component />
              </Box>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  </BraidProvider>
));
