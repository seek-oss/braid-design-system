import React from 'react';
import { RouteProps } from 'react-router';
import { ComponentDoc } from '../../ComponentDoc/ComponentDoc';
import {
  getComponentDocs,
  getComponentSnippets,
} from '../../navigationHelpers';

const page: RouteProps = {
  render: ({ match }) => {
    const componentName = match.params.componentName ?? '';
    return (
      <ComponentDoc
        key={componentName} // Force remount per page to fix hooks errors when generating code snippets
        subfolder={/^Icon/.test(componentName) ? 'icons' : undefined}
        componentName={componentName}
        docs={getComponentDocs(componentName)}
        snippets={getComponentSnippets(componentName)}
      />
    );
  },
};

export default {
  '/components/:componentName': page,
};
