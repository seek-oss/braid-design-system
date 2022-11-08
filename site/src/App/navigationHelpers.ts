import groupBy from 'lodash/groupBy';
import * as components from 'braid-src/lib/components';
import * as testComponents from 'braid-src/test';
import * as css from 'braid-src/css';
import type { BraidSnippet } from 'braid-src/lib/components/private/Snippets';
import type { ComponentDocs, ComponentExample, CssDoc } from '../types';
import undocumentedExports from '../undocumentedExports.json';

const componentDocsContext = require.context(
  'braid-src/lib/components/',
  true,
  /.docs\.tsx$/,
);

const cssDocsContext = require.context('braid-src/css/', true, /.docs\.tsx$/);

export const getComponentDocs = (componentName: string) => {
  const normalizedComponentRoute = /^icon/i.test(componentName)
    ? `./icons/${componentName}/${componentName}.docs.tsx`
    : `./${componentName}/${componentName}.docs.tsx`;

  return componentDocsContext(normalizedComponentRoute)
    .default as ComponentDocs;
};

export const getCssDoc = (cssName: string) =>
  cssDocsContext(`./${cssName}.docs.tsx`).default as CssDoc;

const snippetsContext = require.context(
  'braid-src/lib/components/',
  true,
  /\.snippets\.tsx?$/,
);

export const getComponentSnippets = (componentName: string) => {
  const normalizedComponentRoute = `./${componentName}/${componentName}.snippets.tsx`;

  if (
    !snippetsContext.keys().includes(normalizedComponentRoute) ||
    /^(drawer|dialog)$/i.test(componentName)
  ) {
    return;
  }

  const snippets = snippetsContext(normalizedComponentRoute)
    .snippets as BraidSnippet[];

  return snippets.map((snippet) => ({
    ...snippet,
    group: snippet.group || componentName,
  }));
};

const documentedCssNames = Object.keys(css).filter(
  (name) => !undocumentedExports.css.includes(name),
);

const documentedComponentNames = Object.keys({
  ...components,
  ...testComponents,
})
  .filter((name) => {
    if (name.startsWith('Icon')) {
      return false;
    }

    return !undocumentedExports.components.includes(name);
  })
  .sort();

export const documentedCss = documentedCssNames.map((name) => {
  const docs = getCssDoc(name);

  return { name, ...docs };
});

export const documentedComponents = documentedComponentNames.map((name) => {
  const docs = getComponentDocs(name);

  return { name, ...docs };
});

export const categorisedComponents = groupBy(
  documentedComponents,
  (component) => component.category,
);

const getComponentNameFromFilename = (filename: string) => {
  const componentName = filename.match(/([a-zA-Z]+)\.gallery\.tsx?$/)?.[1];
  if (!componentName) {
    throw new Error(
      `Expected file name ending in .gallery.tsx, got ${filename}`,
    );
  }

  return componentName;
};

const galleryContext = require.context(
  'braid-src/lib/components/',
  true,
  /.gallery\.tsx$/,
);

export const galleryComponents = galleryContext.keys().map((filename) => ({
  name: getComponentNameFromFilename(filename),
  examples: galleryContext(filename).galleryItems as ComponentExample[],
}));
