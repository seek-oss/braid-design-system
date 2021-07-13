import '../../../lib/css/reset';
import React, { StrictMode } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import map from 'lodash/map';
import { ThemeSettingProvider } from './ThemeSetting';
import { docs } from '../../../lib/themes';
import {
  BraidProvider,
  ToastProvider,
  makeLinkComponent,
} from '../../../lib/components';
import { Navigation } from './Navigation/Navigation';
import home from './routes/home';
import guides from './routes/guides';
import foundations from './routes/foundations';
import examples from './routes/examples';
import components from './routes/components';
import css from './routes/css';
import releaseNotes from './routes/releases';
import gallery from './routes/gallery';
import { AppMeta } from './Seo/AppMeta';

const CustomLink = makeLinkComponent(
  ({ href, rel, onClick, ...restProps }, ref) =>
    href[0] === '/' && !/\/playroom\/?($|#)/.test(href) ? (
      <ReactRouterLink
        ref={ref}
        {...restProps}
        to={href}
        rel={rel}
        onClick={onClick}
      />
    ) : (
      <a
        ref={ref}
        {...restProps}
        href={href}
        rel={rel || 'noreferrer noopener'}
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

const galleryPath = '/gallery';

export const App = () => (
  <StrictMode>
    <ThemeSettingProvider>
      <BraidProvider theme={docs} linkComponent={CustomLink}>
        <ToastProvider>
          <AppMeta />
          <Switch>
            <Route {...gallery[galleryPath]} path={galleryPath} />
            <Navigation>
              <Switch>
                {map(
                  {
                    ...home,
                    ...guides,
                    ...foundations,
                    ...examples,
                    ...components,
                    ...css,
                    ...releaseNotes,
                  },
                  (routeProps, path) => (
                    <Route key={path} {...routeProps} path={path} />
                  ),
                )}
                <Redirect path="/components" exact to="/" />
              </Switch>
            </Navigation>
          </Switch>
        </ToastProvider>
      </BraidProvider>
    </ThemeSettingProvider>
  </StrictMode>
);
