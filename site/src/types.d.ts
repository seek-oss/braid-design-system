import { ReactNode } from 'react';
import { RouteProps } from 'react-router';
import { Snippets } from 'sku/playroom';
import { Optional } from 'utility-types';
import { ReactNodeNoStrings } from './../../lib/components/private/ReactNodeNoStrings';
import { BoxProps } from '../../lib/components/Box/Box';

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
  renderDate: number;
}

export interface RenderContext {
  html: string;
  publicPath: string;
  routerBasename: string;
  appConfig: AppConfig;
}

export interface Page extends RouteProps {
  title: string;
}

interface DocsSnippet extends Optional<Snippets[number], 'group'> {
  code: ReactChild;
}

export interface ComponentDocs {
  category: 'Logic' | 'Layout' | 'Content' | 'Icon';
  added?: Date;
  deprecationWarning?: ReactNodeNoStrings;
  migrationGuide?: boolean;
  foundation?: boolean;
  screenshotWidths: Array<320 | 768 | 1200>;
  screenshotOnlyInWireframe?: boolean;
  examples: ComponentExample[];
  snippets?: DocsSnippet[];
  description?: ReactNodeNoStrings;
  subComponents?: string[];
}

export interface ComponentExample {
  label?: string;
  docsSite?: boolean;
  storybook?: boolean;
  background?: NonNullable<BoxProps['background']>;
  Example?: (props: { id: string; handler: () => void }) => JSX.Element;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  code?: string;
  showCodeByDefault?: boolean;
  playroom?: boolean;
}
