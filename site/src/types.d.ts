import { ReactNode, ReactElement } from 'react';
import { HelmetData } from 'react-helmet-async';
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
  helmetContext: HelmetData['context'] | Record<string, never>;
}

export interface Page extends RouteProps {
  title: string;
  badge?: 'New';
}

export interface ComponentDocs {
  category: 'Logic' | 'Layout' | 'Content' | 'Icon';
  deprecationWarning?: ReactNodeNoStrings;
  banner?: ReactNodeNoStrings;
  migrationGuide?: boolean;
  description?: ReactNodeNoStrings;
  subComponents?: string[];
  Example?: (
    props: ExampleProps & PlayroomExampleProps,
  ) => Source<ReactElement>;
  alternatives: Array<{ name: string; description: string }>;
  accessibility?: ReactNodeNoStrings;
  additional?: ComponentExample[];
}

export interface CssDoc {
  banner?: ReactNodeNoStrings;
  usage: ReactNodeNoStrings;
  description?: ReactNodeNoStrings;
  additional?: ComponentExample[];
}

interface ExampleProps {
  id: string;
  handler: () => void;
}
interface PlayroomExampleProps extends ReturnType<typeof useScope> {}

export interface ComponentExample {
  label?: string;
  description?: ReactNodeNoStrings;
  background?: NonNullable<BoxProps['background']>;
  Example?: (
    props: ExampleProps & PlayroomExampleProps,
  ) => Source<ReactElement>;
  Container?: (props: { children: ReactNode }) => ReactElement;
  code?: string;
  showCodeByDefault?: boolean;
  playroom?: boolean;
}

export interface ComponentScreenshot {
  screenshotWidths: Array<320 | 768 | 992 | 1200>;
  screenshotOnlyInWireframe?: boolean;
  examples: {
    label?: string;
    background?: NonNullable<BoxProps['background']>;
    Example?: (props: ExampleProps) => ReactElement;
    Container?: (props: { children: ReactNode }) => ReactElement;
  }[];
}
