import { ComponentType, ReactNode, SyntheticEvent, ReactElement } from 'react';

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
}

export interface RenderContext {
  html: string;
  publicPath: string;
  routerBasename: string;
  appConfig: AppConfig;
}

export interface ComponentDocs {
  migrationGuide?: boolean;
  storybook?: boolean;
  examples: ComponentExample[];
}

export interface ComponentExample {
  label?: string;
  docsSite?: boolean;
  Example?: (props: {
    id: string;
    handler: (event: SyntheticEvent) => void;
  }) => JSX.Element;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  code?: string;
}
