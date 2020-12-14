import React from 'react';
import { Snippets } from '../private/Snippets';
import { Columns, Column, Stack, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: '2 Columns',
    code: source(
      <Columns space="gutter">
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
      </Columns>,
    ),
  },
  {
    name: '2 Columns (Collapse Below Tablet)',
    code: source(
      <Columns space="gutter" collapseBelow="tablet">
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
      </Columns>,
    ),
  },
  {
    name: '3 Columns',
    code: source(
      <Columns space="gutter">
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
      </Columns>,
    ),
  },
  {
    name: '3 Columns (Collapse Below Tablet)',
    code: source(
      <Columns space="gutter" collapseBelow="tablet">
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={60} label="Column" />
          </Stack>
        </Column>
      </Columns>,
    ),
  },
  {
    name: 'Main Content With Sidebar',
    code: source(
      <Columns space="gutter" collapseBelow="tablet">
        <Column width="2/3">
          <Stack space="small">
            <Placeholder height={400} label="Main" />
          </Stack>
        </Column>
        <Column>
          <Stack space="small">
            <Placeholder height={100} label="Sidebar" />
          </Stack>
        </Column>
      </Columns>,
    ),
  },
];
