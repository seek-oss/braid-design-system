import React from 'react';
import { Snippets } from '../private/Snippets';
import { RadioGroup, RadioItem } from '../../playroom/components';

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
];
