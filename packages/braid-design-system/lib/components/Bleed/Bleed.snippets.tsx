import React from 'react';
import { Snippets } from '../private/Snippets';
import { Bleed, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'On all sides',
    code: source(
      <Bleed space="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
  {
    name: 'Horizontally',
    code: source(
      <Bleed horizontal="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
  {
    name: 'Vertically',
    code: source(
      <Bleed vertical="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
  {
    name: 'To the top',
    code: source(
      <Bleed top="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
  {
    name: 'To the bottom',
    code: source(
      <Bleed bottom="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
  {
    name: 'To the left',
    code: source(
      <Bleed left="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
  {
    name: 'To the right',
    code: source(
      <Bleed right="gutter">
        <Placeholder height={80} />
      </Bleed>,
    ),
  },
];
