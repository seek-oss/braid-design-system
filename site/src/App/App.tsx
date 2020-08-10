import '../../../lib/reset';
import React, { StrictMode, forwardRef, ComponentProps } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import map from 'lodash/map';
import { ThemeSettingProvider } from './ThemeSetting';
import { docs } from '../../../lib/themes';
import {
  BraidProvider,
  ToastProvider,
  LinkComponent,
} from '../../../lib/components';
import { Navigation } from './Navigation/Navigation';
import home from './routes/home';
import guides from './routes/guides';
import foundations from './routes/foundations';
import examples from './routes/examples';
import components from './routes/components';

const CustomLink = forwardRef<HTMLAnchorElement, ComponentProps<LinkComponent>>(
  ({ href, rel, onClick, ...restProps }, ref) =>
    href[0] === '/' && !/\/playroom\/?($|#)/.test(href) ? (
      <ReactRouterLink
        {...restProps}
        to={href}
        rel={rel}
        onClick={onClick}
        ref={ref}
      />
    ) : (
      <a
        {...restProps}
        href={href}
        rel={rel || 'noreferrer noopener'}
        ref={ref}
        onClick={(event) => {
          if (href === '' || href === '#') {
            event.preventDefault();
          }

          if (typeof onClick === 'function') {
            onClick(event);
          }
        }}
      />
    ),
);

export const App = () => (
  <StrictMode>
    <ThemeSettingProvider>
      <BraidProvider theme={docs} linkComponent={CustomLink}>
        <ToastProvider>
          <Navigation>
            <Switch>
              {map(
                {
                  ...home,
                  ...guides,
                  ...foundations,
                  ...examples,
                  ...components,
                },
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
