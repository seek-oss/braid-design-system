import type { Source } from '@braid-design-system/source.macro';
import type { Snippets as PlayroomSnippets } from 'playroom';
import type { ReactElement } from 'react';
import type { Optional } from 'utility-types';

interface BraidSnippet extends Omit<
  Optional<PlayroomSnippets[number], 'group'>,
  'code'
> {
  code: Source<ReactElement>;
}

export type Snippets = BraidSnippet[];
