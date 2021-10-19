import type { ReactChild } from 'react';
import type { Snippets as PlayroomSnippets } from 'playroom';
import type { Optional } from 'utility-types';
import type { Source } from '../../utils/source.macro';

export interface BraidSnippet
  extends Omit<Optional<PlayroomSnippets[number], 'group'>, 'code'> {
  code: Source<ReactChild>;
}

export type Snippets = Array<BraidSnippet>;
