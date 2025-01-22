import source from '@braid-design-system/source.macro';
import React from 'react';

import { Columns, Column, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: '2 Columns',
    code: source(
      <Columns space="large">
        <Column>
          <Placeholder height={60} label="Column" />
        </Column>
        <Column>
          <Placeholder height={60} label="Column" />
        </Column>
      </Columns>,
    ),
  },
  {
    name: 'Collapse Below Tablet',
    code: source(
      <Columns space="large" collapseBelow="tablet">
        <Column>
          <Placeholder height={60} label="Column" />
        </Column>
        <Column>
          <Placeholder height={60} label="Column" />
        </Column>
      </Columns>,
    ),
  },
  {
    name: 'Content width second column',
    code: source(
      <Columns space="small">
        <Column>
          <Placeholder height={60} label="Column" />
        </Column>
        <Column width="content">
          <Placeholder height={60} label="Column" />
        </Column>
      </Columns>,
    ),
  },
  {
    name: 'Split View',
    code: source(
      <Columns space="xlarge" collapseBelow="tablet">
        <Column width="2/5">
          <Placeholder height={400} label="List" />
        </Column>
        <Column>
          <Placeholder height={100} label="Detail" />
        </Column>
      </Columns>,
    ),
  },
  {
    name: 'Main Content With Sidebar',
    code: source(
      <Columns space="xlarge" collapseBelow="tablet">
        <Column width="2/3">
          <Placeholder height={400} label="Main" />
        </Column>
        <Column>
          <Placeholder height={100} label="Sidebar" />
        </Column>
      </Columns>,
    ),
  },
];
