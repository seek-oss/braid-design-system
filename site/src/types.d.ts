import type { Source } from '@braid-design-system/source.macro';
import type { BoxProps } from 'braid-src/lib/components/Box/Box';
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';
import type useScope from 'braid-src/lib/playroom/useScope';
import type { ReactNode, ReactElement } from 'react';
import type { HelmetData } from 'react-helmet-async';
import type { RouteProps } from 'react-router';

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
  branchName?: string;
  headBranchName: string;
}

export interface RenderContext {
  html: string;
  routerBasename: string;
  appConfig: AppConfig;
  renderDate: number;
  versionMap: Record<string, string>;
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

type PlayroomExampleProps = ReturnType<typeof useScope>;
export interface ComponentDocs {
  category: 'Logic' | 'Layout' | 'Content' | 'Icon';
  deprecationWarning?: ReactNodeNoStrings;
  banner?: ReactNodeNoStrings;
  description?: ReactNodeNoStrings;
  subComponents?: string[];
  examplebackground?: false;
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
  handler: () => void;
}

export interface GalleryComponent {
  itemWidth?: 'icon' | 'standard' | 'wide';
  examples: ComponentExample[];
}

export interface ComponentExample {
  label?: string;
  primaryHeading?: boolean; // Todo - determine how this will be used
  deprecated?: boolean;
  description?: ReactNodeNoStrings;
  background?: NonNullable<BoxProps['background']> | false;
  Example?: (
    props: ExampleProps & PlayroomExampleProps,
  ) => Source<ReactElement>;
  Container?: (props: { children: ReactNode }) => ReactElement;
  code?: string | false;
  showCodeByDefault?: boolean;
  playroom?: boolean;
}
