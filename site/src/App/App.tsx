import '../../../lib/css/reset';
import React, { StrictMode, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import map from 'lodash/map';
import { ThemeSettingProvider } from './ThemeSetting';
import { docs } from 'braid-design-system/lib/themes';
import {
  BraidProvider,
  ToastProvider,
  makeLinkComponent,
} from 'braid-design-system/lib/components';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from './routes/home';
import guides from './routes/guides';
import foundations from './routes/foundations';
import examples from './routes/examples';
import { DocNavigation } from './DocNavigation/DocNavigation';
import { DocDetails } from './DocNavigation/DocDetails';
import { DocProps } from './DocNavigation/DocProps';
import { DocReleases } from './DocNavigation/DocReleases';
import { DocSnippets } from './DocNavigation/DocSnippets';
import { ReleasesPage } from './routes/releases';
import { GalleryPage } from './routes/gallery';
import { AppMeta } from './Seo/AppMeta';
import { darkMode } from 'braid-design-system/lib/css/atoms/sprinkles.css';

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

export const App = () => {
  // TODO: COLORMODE RELEASE
  // Remove color mode toggle
  useEffect(() => {
    let code = '';
    const darkTrigger = 'braiddark';
    const lightTrigger = 'braidlight';
    const longestTrigger = Math.max(lightTrigger.length, darkTrigger.length);
    const colorModeToggle = (ev: KeyboardEvent) => {
      code += ev.key;
      if (code.substr(code.length - darkTrigger.length) === darkTrigger) {
        document.documentElement.classList.add(darkMode);
        code = '';
      }

      if (code.substr(code.length - lightTrigger.length) === lightTrigger) {
        document.documentElement.classList.remove(darkMode);
        code = '';
      }

      if (code.length > longestTrigger) {
        code = code.substr(code.length - longestTrigger);
      }
    };
    window.addEventListener('keydown', colorModeToggle);

    return () => {
      window.removeEventListener('keydown', colorModeToggle);
    };
  }, []);

  return (
    <StrictMode>
      <ThemeSettingProvider>
        <BraidProvider theme={docs} linkComponent={CustomLink}>
          <ToastProvider>
            <AppMeta />
            <Routes>
              <Route path="/gallery" element={<GalleryPage />} />
              <Route element={<Navigation />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/releases" element={<ReleasesPage />} />
                {map(
                  {
                    ...guides,
                    ...foundations,
                    ...examples,
                  },
                  (routeProps, path) => (
                    <Route key={path} {...routeProps} path={path} />
                  ),
                )}
                <Route path=":docsType">
                  <Route path=":docsName" element={<DocNavigation />}>
                    <Route path="" element={<DocDetails />} />
                    <Route path="props" element={<DocProps />} />
                    <Route path="releases" element={<DocReleases />} />
                    <Route path="snippets" element={<DocSnippets />} />
                  </Route>
                  {/* Redirect for old components as homepage route */}
                  <Route path="" element={<Navigate to="/" replace />} />
                </Route>
              </Route>
            </Routes>
          </ToastProvider>
        </BraidProvider>
      </ThemeSettingProvider>
    </StrictMode>
  );
};
