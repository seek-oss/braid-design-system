import type { Source } from '@braid-design-system/source.macro';
import type { Snippets as PlayroomSnippets } from 'playroom';
import type { ReactElement, ReactNode } from 'react';
import type { Optional } from 'utility-types';

interface BraidSnippet extends Omit<
  Optional<PlayroomSnippets[number], 'group'>,
  'code'
> {
  code: Source<ReactElement>;
  Container?: (props: { children: ReactNode }) => ReactElement;
}

export type Snippets = BraidSnippet[];
