import 'braid-design-system/reset';

import {
  BraidProvider,
  ToastProvider,
  makeLinkComponent,
} from 'braid-design-system';
import docsTheme from 'braid-design-system/themes/docs';
import { darkMode } from 'braid-src/lib/css/atoms/sprinkles.css';
import { StrictMode, useEffect } from 'react';
import { Route, Routes, Navigate, Link as ReactRouterLink } from 'react-router';

import { DocDetails } from './DocNavigation/DocDetails';
import { DocNavigation } from './DocNavigation/DocNavigation';
import { DocProps } from './DocNavigation/DocProps';
import { DocReleases } from './DocNavigation/DocReleases';
import { DocSnippets } from './DocNavigation/DocSnippets';
import { Navigation } from './Navigation/Navigation';
import { AppMeta } from './Seo/AppMeta';
import { ThemeSettingProvider } from './ThemeSetting';
import { Components } from './routes/components/Components';
import examples from './routes/examples';
import { PatternsPage } from './routes/examples/PatternsPage';
import foundations from './routes/foundations';
import { Foundations } from './routes/foundations/Foundations';
import { GalleryPage } from './routes/gallery';
import guides from './routes/guides';
import { HomePage } from './routes/home';
import { ReleasesPage } from './routes/releases';
import { Styles } from './routes/styles/Styles';
import { TemplateGroup } from './routes/templates';
import { TemplateDetail } from './routes/templates/TemplateDetail';
import { Templates } from './routes/templates/Templates';

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
        <BraidProvider theme={docsTheme} linkComponent={CustomLink}>
          <ToastProvider>
            <AppMeta />
            <Routes>
              <Route path="/gallery" element={<GalleryPage />} />
              <Route element={<Navigation />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/releases" element={<ReleasesPage />} />
                {Object.entries({
                  ...guides,
                  ...foundations,
                  ...examples,
                }).map(([path, routeProps]) => (
                  <Route key={path} {...routeProps} path={path} />
                ))}
                <Route path="/foundations" element={<Foundations />} />
                <Route path="/components" element={<Components />} />
                <Route path="/examples" element={<PatternsPage />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/css" element={<Styles />} />
                <Route
                  path="/templates/:groupName"
                  element={<TemplateGroup />}
                />
                <Route
                  path="/templates/:groupName/:templateName"
                  element={<TemplateDetail />}
                />
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
