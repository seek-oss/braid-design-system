import React from 'react';
import { Snippets } from '../private/Snippets';
import {
  Badge,
  Placeholder,
  RadioGroup,
  RadioItem,
} from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <RadioGroup label="Label">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      <RadioGroup label="Label" tone="critical" message="Critical message">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    name: 'With a description',
    code: source(
      <RadioGroup label="Label" description="More details about options">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    name: 'With item-level descriptions',
    code: source(
      <RadioGroup label="Label">
        <RadioItem label="One" value="1" description="Description for item 1" />
        <RadioItem label="Two" value="2" description="Description for item 2" />
      </RadioGroup>,
    ),
  },
  {
    name: 'With a Badge',
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
    name: 'Small',
    code: source(
      <RadioGroup label="Label" size="small">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>,
    ),
  },
  {
    name: 'With nested content',
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
