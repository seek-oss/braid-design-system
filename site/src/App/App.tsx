import '../../../lib/reset';
import React, { StrictMode } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import map from 'lodash/map';
import { ThemeSettingProvider } from './ThemeSetting';
import { theme as docsSiteTheme } from '../theme/theme.treat';
import {
  BraidProvider,
  ToastProvider,
  LinkComponent,
} from '../../../lib/components';
import { Navigation } from './Navigation/Navigation';
import home from './routes/home';
import guides from './routes/guides';
import foundations from './routes/foundations';
import components from './routes/components';

const BraidLink: LinkComponent = ({ href, rel, ...restProps }) => {
  return /^\//.test(href) && !/\/playroom\/?($|#)/.test(href) ? (
    <ReactRouterLink to={href} rel={rel} {...restProps} />
  ) : (
    <a href={href} rel={rel || 'noreferrer noopener'} {...restProps} />
  );
};

export const App = () => (
  <StrictMode>
    <ThemeSettingProvider>
      <BraidProvider theme={docsSiteTheme} linkComponent={BraidLink}>
        <ToastProvider>
          <Navigation>
            <Switch>
              {map(
                { ...home, ...guides, ...foundations, ...components },
                (routeProps, path) => (
                  <Route key={path} {...routeProps} path={path} />
                ),
              )}
              <Redirect path="/components" exact to="/" />
            </Switch>
          </Navigation>
        </ToastProvider>
      </BraidProvider>
    </ThemeSettingProvider>
  </StrictMode>
);
