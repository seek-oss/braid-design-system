import React from 'react';
import { Snippets } from '../private/Snippets';
import { Columns, Column, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: '2 Columns',
    code: source(
      <Columns space="gutter">
        <Placeholder height={60} label="Column" />
        <Placeholder height={60} label="Column" />
      </Columns>,
    ),
  },
  {
    name: '2 Columns (Collapse Below Tablet)',
    code: source(
      <Columns space="gutter" collapseBelow="tablet">
        <Placeholder height={60} label="Column" />
        <Placeholder height={60} label="Column" />
      </Columns>,
    ),
  },
  {
    name: '3 Columns',
    code: source(
      <Columns space="gutter">
        <Placeholder height={60} label="Column" />
        <Placeholder height={60} label="Column" />
        <Placeholder height={60} label="Column" />
      </Columns>,
    ),
  },
  {
    name: '3 Columns (Collapse Below Tablet)',
    code: source(
      <Columns space="gutter" collapseBelow="tablet">
        <Placeholder height={60} label="Column" />
        <Placeholder height={60} label="Column" />
        <Placeholder height={60} label="Column" />
      </Columns>,
    ),
  },
  {
    name: 'Main Content With Sidebar',
    code: source(
      <Columns space="gutter" collapseBelow="tablet">
        <Column width="2/3">
          <Placeholder height={400} label="Main" />
        </Column>
        <Placeholder height={100} label="Sidebar" />
      </Columns>,
    ),
  },
];
