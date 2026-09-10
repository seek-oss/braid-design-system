import 'braid-design-system/reset';

import {
  BraidProvider,
  ToastProvider,
  makeLinkComponent,
} from 'braid-design-system';
import docsTheme from 'braid-design-system/themes/docs';
import * as icons from 'braid-src/lib/components/icons';
import { darkMode } from 'braid-src/lib/css/atoms/sprinkles.css';
import { StrictMode, useEffect } from 'react';
import {
  Route,
  Routes,
  Navigate,
  Link as ReactRouterLink,
  useLocation,
  useParams,
} from 'react-router';

import { DocDetails } from './DocNavigation/DocDetails';
import { DocNavigation } from './DocNavigation/DocNavigation';
import { DocProps } from './DocNavigation/DocProps';
import { DocReleases } from './DocNavigation/DocReleases';
import { DocSnippets } from './DocNavigation/DocSnippets';
import { Navigation } from './Navigation/Navigation';
import { AppMeta } from './Seo/AppMeta';
import { ThemeSettingProvider } from './ThemeSetting';
import { Components } from './routes/components/Components';
import foundations, { cssFoundationDocs } from './routes/foundations';
import { Foundations } from './routes/foundations/Foundations';
import {
  iconDocsPath,
  iconographyPath,
  isIconDocsName,
} from './routes/foundations/iconDocs';
import { GalleryPage } from './routes/gallery';
import guides from './routes/guides';
import { Guides } from './routes/guides/Guides';
import { HomePage } from './routes/home';
import { Patterns } from './routes/patterns/Patterns';
import { ReleasesPage } from './routes/releases';
import { Styles } from './routes/styles/Styles';
import { TemplateGroup } from './routes/templates';
import { TemplateDetail } from './routes/templates/TemplateDetail';
import { Templates } from './routes/templates/Templates';
import {
  templateDetailPath,
  templateGroupPath,
  templatePathPrefix,
} from './routes/templates/templateDocs';
import { navSections } from './navigationSections';

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

const iconDocNames = Object.keys(icons);

const RedirectToIconDocs = ({
  name,
  page,
}: {
  name: string;
  page?: 'props' | 'releases';
}) => {
  const { state } = useLocation();

  return (
    <Navigate to={iconDocsPath(name, page)} replace={true} state={state} />
  );
};

const IconFoundationDocs = () => {
  const { docsName = '' } = useParams();

  if (!isIconDocsName(docsName)) {
    return <Navigate to={iconographyPath} replace={true} />;
  }

  return <DocNavigation />;
};

const RedirectCssToStyles = () => {
  const { docsName, page } = useParams();
  const { state } = useLocation();
  const suffix = page ? `/${page}` : '';

  return (
    <Navigate to={`/styles/${docsName}${suffix}`} replace={true} state={state} />
  );
};

const RedirectLegacyComponentRoute = () => {
  const { docsType = '' } = useParams();

  if (docsType === 'styles') {
    return <Styles />;
  }

  if (navSections.some((section) => section.href === `/${docsType}`)) {
    return null;
  }

  return <Navigate to="/" replace={true} />;
};

const RedirectToPatternTemplates = () => {
  const { groupName, templateName } = useParams();
  const { state } = useLocation();

  let to = templatePathPrefix;
  if (groupName && templateName) {
    to = templateDetailPath(groupName, templateName);
  } else if (groupName) {
    to = templateGroupPath(groupName);
  }

  return <Navigate to={to} replace={true} state={state} />;
};

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
                }).map(([path, routeProps]) => (
                  <Route key={path} {...routeProps} path={path} />
                ))}
                {/* Redirects for relocated/removed pages */}
                <Route
                  path="/getting-started"
                  element={<Navigate to="/guides" replace />}
                />
                <Route
                  path="/examples/job-summary"
                  element={<Navigate to="/guides/job-summary" replace />}
                />
                <Route
                  path="/getting-started/job-summary"
                  element={<Navigate to="/guides/job-summary" replace />}
                />
                <Route
                  path="/examples/basic-form"
                  element={<Navigate to="/patterns/forms" replace />}
                />
                <Route
                  path="/examples/marketing-banner"
                  element={<Navigate to="/patterns" replace />}
                />
                <Route
                  path="/examples"
                  element={<Navigate to="/patterns" replace />}
                />
                <Route
                  path="/patterns/revealing-secondary-information"
                  element={
                    <Navigate to="/patterns/secondary-information" replace />
                  }
                />
                {cssFoundationDocs.flatMap((doc) => [
                  <Route
                    key={`/css/${doc.name}`}
                    path={`/css/${doc.name}`}
                    element={<Navigate to={doc.path} replace />}
                  />,
                  <Route
                    key={`/css/${doc.name}/releases`}
                    path={`/css/${doc.name}/releases`}
                    element={<Navigate to={`${doc.path}/releases`} replace />}
                  />,
                  ...(doc.redirectsFrom ?? []).flatMap((from) => [
                    <Route
                      key={from}
                      path={from}
                      element={<Navigate to={doc.path} replace />}
                    />,
                    <Route
                      key={`${from}/releases`}
                      path={`${from}/releases`}
                      element={<Navigate to={`${doc.path}/releases`} replace />}
                    />,
                  ]),
                ])}
                {iconDocNames.flatMap((name) => [
                  <Route
                    key={`/components/${name}`}
                    path={`/components/${name}`}
                    element={<RedirectToIconDocs name={name} />}
                  />,
                  <Route
                    key={`/components/${name}/props`}
                    path={`/components/${name}/props`}
                    element={<RedirectToIconDocs name={name} page="props" />}
                  />,
                  <Route
                    key={`/components/${name}/releases`}
                    path={`/components/${name}/releases`}
                    element={<RedirectToIconDocs name={name} page="releases" />}
                  />,
                ])}
                <Route path="/guides" element={<Guides />} />
                <Route path="/foundations" element={<Foundations />} />
                <Route
                  path="/foundations/iconography/:docsName"
                  element={<IconFoundationDocs />}
                >
                  <Route path="" element={<DocDetails />} />
                  <Route path="props" element={<DocProps />} />
                  <Route path="releases" element={<DocReleases />} />
                </Route>
                <Route path="/components" element={<Components />} />
                <Route path="/patterns" element={<Patterns />} />
                <Route path="/patterns/templates" element={<Templates />} />
                <Route
                  path="/patterns/templates/:groupName"
                  element={<TemplateGroup />}
                />
                <Route
                  path="/patterns/templates/:groupName/:templateName"
                  element={<TemplateDetail />}
                />
                <Route
                  path="/templates"
                  element={<Navigate to={templatePathPrefix} replace />}
                />
                <Route
                  path="/templates/:groupName"
                  element={<RedirectToPatternTemplates />}
                />
                <Route
                  path="/templates/:groupName/:templateName"
                  element={<RedirectToPatternTemplates />}
                />
                <Route path="/styles" element={<Styles />} />
                <Route path="/styles/:docsName" element={<DocNavigation />}>
                  <Route path="" element={<DocDetails />} />
                  <Route path="props" element={<DocProps />} />
                  <Route path="releases" element={<DocReleases />} />
                  <Route path="snippets" element={<DocSnippets />} />
                </Route>
                <Route
                  path="/css"
                  element={<Navigate to="/styles" replace />}
                />
                <Route path="/css/:docsName" element={<RedirectCssToStyles />} />
                <Route
                  path="/css/:docsName/:page"
                  element={<RedirectCssToStyles />}
                />
                <Route path=":docsType/:docsName" element={<DocNavigation />}>
                  <Route path="" element={<DocDetails />} />
                  <Route path="props" element={<DocProps />} />
                  <Route path="releases" element={<DocReleases />} />
                  <Route path="snippets" element={<DocSnippets />} />
                </Route>
                {/* Redirect for old components as homepage route */}
                <Route
                  path=":docsType"
                  element={<RedirectLegacyComponentRoute />}
                />
              </Route>
            </Routes>
          </ToastProvider>
        </BraidProvider>
      </ThemeSettingProvider>
    </StrictMode>
  );
};
