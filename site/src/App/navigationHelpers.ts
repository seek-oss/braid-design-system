import * as css from 'braid-src/css';
import * as components from 'braid-src/lib/components';
import type { Snippets } from 'braid-src/lib/components/private/Snippets';
import * as testComponents from 'braid-src/test';

import { slugify } from '../slugify';
import type {
  ComponentDocs,
  ComponentExample,
  CssDoc,
  GalleryComponent,
  TemplateDocs,
} from '../types';
import undocumentedExports from '../undocumentedExports.json';

const componentDocsContext = require.context(
  'braid-src/lib/components/',
  true,
  /.docs\.tsx$/,
);
const cssDocsContext = require.context(
  'braid-src/lib/css/',
  true,
  /.docs\.tsx$/,
);
const galleryContext = require.context(
  'braid-src/lib/components/',
  true,
  /.gallery\.tsx$/,
);

const templateDocsContext = require.context(
  'braid-src/lib/playroom/templates/',
  true,
  /\.docs\.tsx$/,
);

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
    .snippets as Snippets;

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

export const categorisedComponents = documentedComponents.reduce(
  (acc, component) => ({
    ...acc,
    [component.category]: [...(acc[component.category] || []), component],
  }),
  {} as Record<
    (typeof documentedComponents)[number]['category'],
    Array<(typeof documentedComponents)[number]>
  >,
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

export const galleryComponents = galleryContext.keys().map((filename) => ({
  name: getComponentNameFromFilename(filename),
  itemWidth:
    (galleryContext(filename).galleryItems
      .itemWidth as GalleryComponent['itemWidth']) || 'standard',
  examples: galleryContext(filename).galleryItems
    .examples as ComponentExample[],
}));

// Template docs — path format: ./layouts/StandardPage/StandardPage.docs.tsx
const getTemplateGroupAndNameFromFilename = (filename: string) => {
  const match = filename.match(/^\.\/([^/]+)\/([^/]+)\/\2\.docs\.tsx$/);
  if (!match) {
    throw new Error(
      `Unexpected template docs filename format: ${filename}. Expected ./group/Name/Name.docs.tsx`,
    );
  }
  return { group: match[1], name: match[2] };
};

export const allTemplateDocs = templateDocsContext.keys().map((filename) => {
  const { group, name } = getTemplateGroupAndNameFromFilename(filename);
  const docs = templateDocsContext(filename).default as TemplateDocs;
  return { group, name, slug: slugify(docs.title), ...docs };
});

export const getTemplateDoc = (group: string, name: string): TemplateDocs =>
  templateDocsContext(`./${group}/${name}/${name}.docs.tsx`)
    .default as TemplateDocs;

/**
 * Static lookup mapping slugged template names to template metadata.
 * Enables URL-based resolution like `/templates/standard-page` without knowing the group.
 *
 * @example
 * const info = templateLookup['standard-page'];
 * // { group: 'layouts', name: 'StandardPage', slug: 'standard-page', title: 'Standard Page', ... }
 */
export const templateLookup = allTemplateDocs.reduce(
  (acc, doc) => {
    const slug = slugify(doc.title);
    acc[slug] = doc;
    return acc;
  },
  {} as Record<
    string,
    {
      slug: string;
    } & (typeof allTemplateDocs)[number]
  >,
);
