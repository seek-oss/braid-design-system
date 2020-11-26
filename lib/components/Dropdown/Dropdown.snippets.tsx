import React from 'react';
import { Snippets } from '../private/Snippets';
import { Dropdown, IconLocation } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Dropdown label="Label" placeholder="Please select">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>,
    ),
  },
  {
    name: 'With option groups',
    code: source(
      <Dropdown label="Label" placeholder="Please select">
        <optgroup label="Group 1">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </optgroup>
        <optgroup label="Group 2">
          <option>Option A</option>
          <option>Option B</option>
          <option>Option C</option>
        </optgroup>
      </Dropdown>,
    ),
  },
  {
    name: 'With an error',
    code: source(
      <Dropdown
        label="Label"
        placeholder="Please select"
        tone="critical"
        message="Required field"
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>,
    ),
  },
  {
    name: 'With a description',
    code: source(
      <Dropdown
        label="Label"
        placeholder="Please select"
        description="Extra information about the field"
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>,
    ),
  },
  {
    name: 'With an icon',
    code: source(
      <Dropdown
        label="Label"
        placeholder="Please select"
        icon={<IconLocation />}
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>,
    ),
  },
];
