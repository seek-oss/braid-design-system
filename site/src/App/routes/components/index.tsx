import React from 'react';
import { RouteProps } from 'react-router';
import { ComponentDoc } from '../../ComponentDoc/ComponentDoc';
import {
  getComponentDetails,
  getComponentSnippets,
} from '../../navigationHelpers';

const page: RouteProps = {
  render: ({ match }) => (
    <ComponentDoc
      key={match.params.componentName} // Force remount per page to fix hooks errors when generating code snippets
      subfolder={/^Icon/.test(match.params.componentName) ? 'icons' : undefined}
      componentName={match.params.componentName}
      details={getComponentDetails(match.params.componentName)}
      snippets={getComponentSnippets(match.params.componentName)}
    />
  ),
};

export default {
  '/components/:componentName': page,
};
