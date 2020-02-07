import { ComponentType, ReactNode } from 'react';
import { Snippets } from 'sku/playroom';
import { Optional } from 'utility-types';

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

interface DocsSnippet extends Optional<Snippets[number], 'group'> {
  code: ReactChild;
}

export interface ComponentDocs {
  category: 'Logic' | 'Layout' | 'Content' | 'Interaction' | 'Icon';
  migrationGuide?: boolean;
  foundation?: boolean;
  screenshotWidths: Array<320 | 768 | 1200>;
  examples: ComponentExample[];
  snippets?: DocsSnippet[];
}

export interface ComponentExample {
  label?: string;
  docsSite?: boolean;
  storybook?: boolean;
  Example?: (props: { id: string; handler: () => void }) => JSX.Element;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  code?: string;
  playroom?: boolean;
}
