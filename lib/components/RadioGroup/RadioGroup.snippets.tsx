import React from 'react';
import { Snippets } from '../private/Snippets';
import {
  RadioGroup,
  RadioItem,
  Badge,
  Placeholder,
} from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <RadioGroup label="Options">
        <RadioItem label="Option 1" value="1" />
        <RadioItem label="Option 2" value="2" />
      </RadioGroup>
    ),
  },
  {
    name: 'with Description',
    code: (
      <RadioGroup label="Options" description="More details about options">
        <RadioItem label="Option 1" value="1" />
        <RadioItem label="Option 2" value="2" />
      </RadioGroup>
    ),
  },
  {
    name: 'with an error',
    code: (
      <RadioGroup label="Options" tone="critical" message="Required">
        <RadioItem label="Option 1" value="1" />
        <RadioItem label="Option 2" value="2" />
      </RadioGroup>
    ),
  },
  {
    group: 'RadioItem',
    name: 'with Badge',
    code: (
      <RadioItem
        label="With badge"
        value="badge"
        badge={
          <Badge tone="promote" weight="strong">
            Badge
          </Badge>
        }
      />
    ),
  },
  {
    group: 'RadioItem',
    name: 'with Description',
    code: (
      <RadioItem
        label="With description"
        value="description"
        description="Extra item detail"
      />
    ),
  },
  {
    group: 'RadioItem',
    name: 'with nested content visible when checked',
    code: (
      <RadioItem
        label="With nested content"
        value="children"
        description="Content visible below when checked"
      >
        <Placeholder height={50} width="100%" />
      </RadioItem>
    ),
  },
];
