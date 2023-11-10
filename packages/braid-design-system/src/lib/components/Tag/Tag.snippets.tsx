import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Inline, Tag } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Inline space="small">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </Inline>,
    ),
  },
  {
    name: 'Clearable',
    code: source(
      <Inline space="small">
        <Tag onClear={() => {}} clearLabel="Clear">
          Tag
        </Tag>
        <Tag onClear={() => {}} clearLabel="Clear">
          Tag
        </Tag>
        <Tag onClear={() => {}} clearLabel="Clear">
          Tag
        </Tag>
      </Inline>,
    ),
  },
];
