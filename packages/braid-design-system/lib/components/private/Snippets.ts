import type { ReactElement } from 'react';
import type { Snippets as PlayroomSnippets } from 'playroom';
import type { Optional } from 'utility-types';
import type { Source } from '../../utils/source.macro';

interface BraidSnippet
  extends Omit<Optional<PlayroomSnippets[number], 'group'>, 'code'> {
  code: Source<ReactElement>;
}

export type Snippets = BraidSnippet[];
