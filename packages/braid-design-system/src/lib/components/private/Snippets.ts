import type { Source } from '@braid-design-system/source.macro';
import type useScope from 'braid-design-system/playroom/scope';
import type { Snippets as PlayroomSnippets } from 'playroom';
import type { ReactElement, ReactNode } from 'react';
import type { Optional } from 'utility-types';

interface BraidSnippet extends Omit<
  Optional<PlayroomSnippets[number], 'name'>,
  'code'
> {
  code: Source<ReactElement>;
  Container?: (props: { children: ReactNode }) => ReactElement;
}

export type Snippets = BraidSnippet[];

type PlayroomExampleProps = ReturnType<typeof useScope>;

export type TemplateSnippets = Array<
  Omit<BraidSnippet, 'code'> & {
    name: string;
    code: (props: PlayroomExampleProps) => Source<ReactElement>;
  }
>;
