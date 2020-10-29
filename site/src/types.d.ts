import { ReactNode } from 'react';
import { RouteProps } from 'react-router';
import { Snippets } from 'sku/playroom';
import { Optional } from 'utility-types';
import { ReactNodeNoStrings } from './../../lib/components/private/ReactNodeNoStrings';
import { BoxProps } from '../../lib/components/Box/Box';

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
}

export interface RenderContext {
  html: string;
  routerBasename: string;
  appConfig: AppConfig;
  renderDate: number;
  versionMap: { [version: string]: string };
  currentVersion: string;
  metaTags: React.ReactElement[];
}

export interface Page extends RouteProps {
  title: string;
  badge?: 'New';
}

interface DocsSnippet extends Optional<Snippets[number], 'group'> {
  code: ReactChild;
}

export interface ComponentDocs {
  category: 'Logic' | 'Layout' | 'Content' | 'Icon';
  deprecationWarning?: ReactNodeNoStrings;
  migrationGuide?: boolean;
  foundation?: boolean;
  screenshotWidths: Array<320 | 768 | 1200>;
  screenshotOnlyInWireframe?: boolean;
  examples: ComponentExample[];
  gallery?: boolean;
  snippets?: DocsSnippet[];
  description?: ReactNodeNoStrings;
  subComponents?: string[];
}

export interface ComponentExample {
  label?: string;
  description?: ReactNodeNoStrings;
  docsSite?: boolean;
  storybook?: boolean;
  background?: NonNullable<BoxProps['background']>;
  Example?: (props: { id: string; handler: () => void }) => JSX.Element;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  code?: string;
  showCodeByDefault?: boolean;
  playroom?: boolean;
  gallery?: boolean;
}
