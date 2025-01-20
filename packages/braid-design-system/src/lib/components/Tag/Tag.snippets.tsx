import source from '@braid-design-system/source.macro';
import React from 'react';

import { IconTag, Inline, Tag } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

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
    name: 'Small',
    code: source(
      <Inline space="xsmall">
        <Tag size="small">Tag</Tag>
        <Tag size="small">Tag</Tag>
        <Tag size="small">Tag</Tag>
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
  {
    name: 'Addable',
    code: source(
      <Inline space="small">
        <Tag onAdd={() => {}} addLabel="Add">
          Tag
        </Tag>
        <Tag onAdd={() => {}} addLabel="Add">
          Tag
        </Tag>
        <Tag onAdd={() => {}} addLabel="Add">
          Tag
        </Tag>
      </Inline>,
    ),
  },
  {
    name: 'With icon',
    code: source(
      <Inline space="small">
        <Tag icon={<IconTag />}>Tag</Tag>
        <Tag icon={<IconTag />}>Tag</Tag>
        <Tag icon={<IconTag />}>Tag</Tag>
      </Inline>,
    ),
  },
];
