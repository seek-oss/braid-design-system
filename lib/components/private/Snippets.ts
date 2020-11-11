import { ReactChild } from 'react';
import { Snippets as PlayroomSnippets } from 'sku/playroom';
import { Optional } from 'utility-types';

export interface Snippet
  extends Omit<Optional<PlayroomSnippets[number], 'group'>, 'code'> {
  code: ReactChild;
}

export type Snippets = Array<Snippet>;
