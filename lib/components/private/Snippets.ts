import { ReactChild } from 'react';
import { Snippets as PlayroomSnippets } from 'sku/playroom';
import { Optional } from 'utility-types';
import { Source } from '../../utils/source.macro';

export interface Snippet
  extends Omit<Optional<PlayroomSnippets[number], 'group'>, 'code'> {
  code: ReactChild | Source<ReactChild>;
}

export type Snippets = Array<Snippet>;
