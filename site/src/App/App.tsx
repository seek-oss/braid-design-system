import * as React from 'react';
import { StrictMode } from 'react';
import { Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';

import '../../../lib/reset';
import { ThemeSettingProvider } from './ThemeSetting';
import { theme as docsSiteTheme } from '../theme/theme.treat';
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
  <ThemeSettingProvider>
    <BraidProvider theme={docsSiteTheme}>
      <ToastProvider>
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
        </div>
      </ToastProvider>
    </BraidProvider>
  </ThemeSettingProvider>
);
