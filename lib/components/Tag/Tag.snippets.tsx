import React from 'react';
import { Snippets } from '../private/Snippets';
import { Inline, Tag } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <Inline space="small">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </Inline>
    ),
  },
  {
    name: 'Dismissable',
    code: (
      <Inline space="small">
        <Tag onClear={() => {}} clearLabel="Dismiss">
          Tag
        </Tag>
        <Tag onClear={() => {}} clearLabel="Dismiss">
          Tag
        </Tag>
        <Tag onClear={() => {}} clearLabel="Dismiss">
          Tag
        </Tag>
      </Inline>
    ),
  },
];
