import groupBy from 'lodash/groupBy';
import * as components from '../../../lib/components';
import { ComponentDocs } from '../types';
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

  return componentDocsContext(normalizedComponentRoute).default;
};

export const documentedComponents = Object.keys(components)
  .filter((name) => {
    if (name.startsWith('Icon')) {
      return false;
    }

    return !undocumentedExports.includes(name);
  })
  .sort();

export const categorisedComponents = groupBy(
  documentedComponents.map((name) => {
    const docs: ComponentDocs = getComponentDocs({
      componentName: name,
      isIcon: false,
    });

    return { name, ...docs };
  }),
  (component) => component.category,
);
