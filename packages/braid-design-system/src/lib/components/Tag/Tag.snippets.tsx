import source from '@braid-design-system/source.macro';

import { IconTag, Inline, Tag } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <Inline space="small">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </Inline>,
    ),
  },
  {
    description: 'Small',
    code: source(
      <Inline space="xsmall">
        <Tag size="small">Tag</Tag>
        <Tag size="small">Tag</Tag>
        <Tag size="small">Tag</Tag>
      </Inline>,
    ),
  },
  {
    description: 'Clearable',
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
    description: 'Addable',
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
    description: 'With icon',
    code: source(
      <Inline space="small">
        <Tag icon={<IconTag />}>Tag</Tag>
        <Tag icon={<IconTag />}>Tag</Tag>
        <Tag icon={<IconTag />}>Tag</Tag>
      </Inline>,
    ),
  },
];
