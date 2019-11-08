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

export interface Page {
  title: string;
  Component: ComponentType;
}

export interface ComponentDocs {
  migrationGuide?: boolean;
  foundation?: boolean;
  storybook?: boolean;
  examples: ComponentExample[];
}

export interface ComponentExample {
  label?: string;
  docsSite?: boolean;
  storybook?: boolean;
  Example?: (props: { id: string; handler: () => void }) => JSX.Element;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  code?: string;
}
