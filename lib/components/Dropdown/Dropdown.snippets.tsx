import React from 'react';
import { Snippets } from '../private/Snippets';
import { Dropdown } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <Dropdown label="Label">
        <option>Option</option>
        <option>Option</option>
        <option>Option</option>
      </Dropdown>
    ),
  },
  {
    name: 'Grouped',
    code: (
      <Dropdown label="Location" placeholder="Please select a location">
        <optgroup label="Major Cities">
          <option value="3004">Melbourne</option>
          <option value="3002">Sydney</option>
        </optgroup>
        <option value="3020">Wonthaggi</option>
      </Dropdown>
    ),
  },
  {
    name: 'With error',
    code: (
      <Dropdown tone="critical" message="Required field" label="Label">
        <option>Option</option>
        <option>Option</option>
        <option>Option</option>
      </Dropdown>
    ),
  },
];
