import { ComponentType, ReactNode } from 'react';

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
  render?: (args: { id: string; handler?: function }) => ReactNode;
  code?: string;
}
