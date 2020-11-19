import groupBy from 'lodash/groupBy';
import * as components from '../../../lib/components';
import { Snippet } from '../../../lib/components/private/Snippets';
import { ComponentDocs, ComponentExample } from '../types';
import undocumentedExports from '../undocumentedExports.json';

const componentDocsContext = require.context(
  '../../../lib/components',
  true,
  /.docs\.tsx$/,
);

export const getComponentDocs = ({
  componentName,
  isIcon,
}: {
  componentName: string;
  isIcon: boolean;
}) => {
  const normalizedComponentRoute = isIcon
    ? `./icons/${componentName}/${componentName}.docs.tsx`
    : `./${componentName}/${componentName}.docs.tsx`;

  return componentDocsContext(normalizedComponentRoute)
    .default as ComponentDocs;
};

const snippetsContext = require.context(
  '../../../lib/components',
  true,
  /\.snippets\.tsx?$/,
);
export const getComponentSnippets = (componentName: string) => {
  const normalizedComponentRoute = `./${componentName}/${componentName}.snippets.tsx`;

  if (!snippetsContext.keys().includes(normalizedComponentRoute)) {
    return;
  }

  const snippets = snippetsContext(normalizedComponentRoute)
    .snippets as Snippet[];

  return snippets.map((snippet) => ({
    ...snippet,
    group: snippet.group || componentName,
  }));
};

export const getAllSnippets = () =>
  snippetsContext.keys().map((filename) => {
    const componentName = filename.match(/([a-zA-Z]+)\.snippets\.tsx?$/)?.[1];
    const snippets = snippetsContext(filename).snippets as Snippet[];

    if (!componentName) {
      throw new Error(
        `Could not parse component name from filename: ${filename}`,
      );
    }

    return {
      name: componentName,
      examples: snippets.map((snippet) => ({
        ...snippet,
        group: snippet.group || componentName,
      })),
    };
  });

const documentedComponentNames = Object.keys(components)
  .filter((name) => {
    if (name.startsWith('Icon')) {
      return false;
    }

    return !undocumentedExports.includes(name);
  })
  .sort();

export const documentedComponents = documentedComponentNames.map((name) => {
  const docs: ComponentDocs = getComponentDocs({
    componentName: name,
    isIcon: false,
  });

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
