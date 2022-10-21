import { ReactElement } from 'react';
import { Snippets as PlayroomSnippets } from 'playroom';
import { Optional } from 'utility-types';
import { Source } from '../../utils/source.macro';

export interface BraidSnippet
  extends Omit<Optional<PlayroomSnippets[number], 'group'>, 'code'> {
  code: Source<ReactElement>;
}

export type Snippets = Array<BraidSnippet>;
