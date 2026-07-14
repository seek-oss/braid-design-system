import * as components from 'braid-design-system';
import * as css from 'braid-design-system/css';
import * as testComponents from 'braid-design-system/test';
import type { Snippets } from 'braid-src/lib/components/private/Snippets';

import { slugify } from '../slugify';
import type {
  ComponentDocs,
  CssDoc,
  GalleryComponent,
  TemplateDocs,
} from '../types';
import undocumentedExports from '../undocumentedExports.json';

const componentDocsContext = import.meta.glob<ComponentDocs>(
  [
    'braid-src/lib/components/**/*.docs.tsx',
    // Exclude common docs that are spread into other docs.
    '!**/iconCommon.docs.tsx',
    '!**/dataAttribute.docs.tsx',
  ],
  {
    eager: true,
    import: 'default',
    base: '../../../packages/braid-design-system/src/lib/components',
  },
);
const cssDocsContext = import.meta.glob<CssDoc>(
  'braid-src/lib/css/**/*.docs.tsx',
  {
    eager: true,
    import: 'default',
    base: '../../../packages/braid-design-system/src/lib/css',
  },
);
const galleryContext = import.meta.glob<{ galleryItems: GalleryComponent }>(
  'braid-src/lib/components/**/*.gallery.tsx',
  {
    eager: true,
  },
);

const templateDocsContext = import.meta.glob<TemplateDocs>(
  'braid-src/lib/playroom/templates/**/*.docs.tsx',
  {
    eager: true,
    import: 'default',
    base: '../../../packages/braid-design-system/src/lib/playroom/templates',
  },
);

export const getComponentDocs = (componentName: string) => {
  const normalizedComponentRoute = /^icon/i.test(componentName)
    ? `./icons/${componentName}/${componentName}.docs.tsx`
    : `./${componentName}/${componentName}.docs.tsx`;

  return componentDocsContext[normalizedComponentRoute];
};

export const getCssDoc = (cssName: string) =>
  cssDocsContext[`./${cssName}.docs.tsx`];

const snippetsContext = import.meta.glob<{ snippets: Snippets }>(
  'braid-src/lib/components/**/*.snippets.tsx?',
  {
    eager: true,
  },
);

export const getComponentSnippets = (componentName: string) => {
  const normalizedComponentRoute = `./${componentName}/${componentName}.snippets.tsx`;

  if (
    !Object.keys(snippetsContext).includes(normalizedComponentRoute) ||
    /^(drawer|dialog)$/i.test(componentName)
  ) {
    return;
  }

  const { snippets } = snippetsContext[normalizedComponentRoute];

  return snippets.map((snippet) => ({
    ...snippet,
    group: snippet.group || componentName,
  }));
};

const documentedCssNames = Object.keys(css)
  .filter((name) => !undocumentedExports.css.includes(name))
  .sort();

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

export const allTemplateDocs = Object.keys(templateDocsContext).map(
  (filename) => {
    const { group, name } = getTemplateGroupAndNameFromFilename(filename);
    const docs = templateDocsContext[filename];
    return { group, name, slug: slugify(docs.title), ...docs };
  },
);

export const getTemplateDoc = (group: string, name: string): TemplateDocs =>
  templateDocsContext[`./${group}/${name}/${name}.docs.tsx`];

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

export const galleryComponents = Object.keys(galleryContext).map(
  (filename) => ({
    name: getComponentNameFromFilename(filename),
    itemWidth: galleryContext[filename].galleryItems.itemWidth || 'standard',
    examples: galleryContext[filename].galleryItems.examples,
  }),
);
