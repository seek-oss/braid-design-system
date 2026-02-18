import source from '@braid-design-system/source.macro';

import {
  Badge,
  Placeholder,
  RadioGroup,
  RadioItem,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <RadioGroup label="Label">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    description: 'With a critical message',
    code: source(
      <RadioGroup label="Label" tone="critical" message="Critical message">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    description: 'With a description',
    code: source(
      <RadioGroup label="Label" description="More details about options">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    description: 'With item-level descriptions',
    code: source(
      <RadioGroup label="Label">
        <RadioItem label="One" value="1" description="Description for item 1" />
        <RadioItem label="Two" value="2" description="Description for item 2" />
      </RadioGroup>,
    ),
  },
  {
    description: 'With a Badge',
    code: source(
      <RadioGroup label="Label">
        <RadioItem label="One" value="1" />
        <RadioItem
          label="Two"
          value="2"
          badge={
            <Badge tone="positive" weight="strong">
              Badge
            </Badge>
          }
        />
      </RadioGroup>,
    ),
  },
  {
    description: 'Small',
    code: source(
      <RadioGroup label="Label" size="small">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    description: 'With nested content',
    code: source(
      <RadioGroup label="Label">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2">
          <Placeholder height={100} />
        </RadioItem>
      </RadioGroup>,
    ),
  },
];
