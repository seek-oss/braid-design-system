import { ComponentType, ReactNode, SyntheticEvent } from 'react';

export interface RenderConfig {
  routerBasename: string;
  sourceUrlPrefix: string;
}

export interface ComponentDocs {
  storybook?: boolean;
  examples: Array<ComponentExample>;
}

export interface ComponentExample {
  label?: string;
  render?: (args: {
    id: string;
    handler: (event: SyntheticEvent) => void;
  }) => ReactNode;
  code?: string;
}
