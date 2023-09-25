import type { ReactNode, ReactElement } from 'react';
import type { HelmetData } from 'react-helmet-async';
import type { RouteProps } from 'react-router';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';
import type { Source } from 'braid-design-system/src/lib/utils/source.macro';
import type { BoxProps } from 'braid-src/lib/components/Box/Box';
import type useScope from 'braid-src/lib/playroom/useScope';

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

export type Page = RouteProps & {
  title: string;
  badge?: 'New';
};

type NavigationSection =
  | 'guides'
  | 'foundations'
  | 'examples'
  | 'components'
  | 'css'
  | 'logic';

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
  alternatives: Array<{
    name: string;
    description: string;
    section?: NavigationSection;
  }>;
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
  code?: string | false;
  showCodeByDefault?: boolean;
  playroom?: boolean;
}

export interface ComponentScreenshot {
  screenshotWidths: Array<320 | 768 | 992 | 1200>;
  screenshotOnlyInWireframe?: boolean;
  examples: {
    label?: string;
    background?: NonNullable<BoxProps['background']>;
    gutter?: boolean;
    Example?: (props: ExampleProps) => ReactElement;
    Container?: (props: { children: ReactNode }) => ReactElement;
  }[];
}
