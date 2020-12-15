import groupBy from 'lodash/groupBy';
import * as components from '../../../lib/components';
import { BraidSnippet } from '../../../lib/components/private/Snippets';
import { ComponentDetails, ComponentExample } from '../types';
import undocumentedExports from '../undocumentedExports.json';

const componentDocsContext = require.context(
  '../../../lib/components',
  true,
  /.docs\.tsx$/,
);

export const getComponentDetails = (componentName: string) => {
  const normalizedComponentRoute = /^icon/i.test(componentName)
    ? `./icons/${componentName}/${componentName}.docs.tsx`
    : `./${componentName}/${componentName}.docs.tsx`;

  return componentDocsContext(normalizedComponentRoute)
    .default as ComponentDetails;
};

const snippetsContext = require.context(
  '../../../lib/components',
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

const documentedComponentNames = Object.keys(components)
  .filter((name) => {
    if (name.startsWith('Icon')) {
      return false;
    }

    return !undocumentedExports.includes(name);
  })
  .sort();

export const documentedComponents = documentedComponentNames.map((name) => {
  const docs = getComponentDetails(name);

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
  '../../../lib/components',
  true,
  /.gallery\.tsx$/,
);
export const galleryComponents = galleryContext.keys().map((filename) => ({
  name: getComponentNameFromFilename(filename),
  examples: galleryContext(filename).galleryItems as ComponentExample[],
}));
