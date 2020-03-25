import '../../../lib/reset';
import React, { StrictMode } from 'react';
import { Route } from 'react-router';
import map from 'lodash/map';
import { ThemeSettingProvider } from './ThemeSetting';
import { theme as docsSiteTheme } from '../theme/theme.treat';
import { BraidProvider, ToastProvider } from '../../../lib/components';
import { Navigation } from './Navigation/Navigation';
import home from './routes/home';
import guides from './routes/guides';
import foundations from './routes/foundations';
import components from './routes/components';

export const App = () => (
  <ThemeSettingProvider>
    <BraidProvider theme={docsSiteTheme}>
      <ToastProvider>
        <StrictMode>
          <Navigation>
            {map(
              { ...home, ...guides, ...foundations, ...components },
              (routeProps, path) => (
                <Route key={path} {...routeProps} path={path} />
              ),
            )}
          </Navigation>
        </StrictMode>
      </ToastProvider>
    </BraidProvider>
  </ThemeSettingProvider>
);
