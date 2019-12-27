import { ComponentType, ReactNode } from 'react';

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
  category: 'Logic' | 'Layout' | 'Content' | 'Interaction' | 'Icon';
  migrationGuide?: boolean;
  foundation?: boolean;
  storybook?: boolean;
  screenshotWidths?: Array<320 | 768 | 1200>;
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
