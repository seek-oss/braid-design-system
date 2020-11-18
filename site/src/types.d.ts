import { ReactNode } from 'react';
import { RouteProps } from 'react-router';
import { ReactNodeNoStrings } from './../../lib/components/private/ReactNodeNoStrings';
import { Source } from '../../lib/utils/source.macro';
import { BoxProps } from '../../lib/components/Box/Box';
import useScope from '../../lib/playroom/useScope';

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

export interface ComponentDocs {
  category: 'Logic' | 'Layout' | 'Content' | 'Icon';
  deprecationWarning?: ReactNodeNoStrings;
  migrationGuide?: boolean;
  foundation?: boolean;
  screenshotWidths: Array<320 | 768 | 1200>;
  screenshotOnlyInWireframe?: boolean;
  examples: ComponentExample[];
  gallery?: boolean;
  description?: ReactNodeNoStrings;
  subComponents?: string[];
}

interface ExampleProps extends ReturnType<typeof useScope> {
  id: string;
  handler: () => void;
}

export interface ComponentExample {
  label?: string;
  description?: ReactNodeNoStrings;
  docsSite?: boolean;
  storybook?: boolean;
  background?: NonNullable<BoxProps['background']>;
  Example?: (props: ExampleProps) => JSX.Element | Source<JSX.Element>;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  code?: string;
  showCodeByDefault?: boolean;
  playroom?: boolean;
  gallery?: boolean;
}
