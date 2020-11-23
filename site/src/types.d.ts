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
  examples: ComponentExample[];
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
  background?: NonNullable<BoxProps['background']>;
  Example?: (props: ExampleProps) => ReactChild | Source<ReactChild>;
  Container?: (props: { children: ReactNode }) => ReactElement;
  code?: string;
  showCodeByDefault?: boolean;
  playroom?: boolean;
}

export interface ComponentScreenshot {
  screenshotWidths: Array<320 | 768 | 1200>;
  screenshotOnlyInWireframe?: boolean;
  examples: {
    label?: string;
    background?: NonNullable<BoxProps['background']>;
    Example?: (props: ExampleProps) => ReactChild;
    Container?: (props: { children: ReactNode }) => ReactElement;
  }[];
}
