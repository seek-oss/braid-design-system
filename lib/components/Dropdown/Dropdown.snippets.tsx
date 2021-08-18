import React from 'react';
import { Snippets } from '../private/Snippets';
import { Dropdown, IconHelp, IconLocation } from '../../playroom/components';
import source from '../../utils/source.macro';
import { TextLink } from '../TextLink/TextLink';

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
    name: 'With additional labels',
    code: source(
      <Dropdown
        label="Label"
        placeholder="Please select"
        secondaryLabel="optional"
        tertiaryLabel={
          <TextLink href="#">
            <IconHelp /> Help
          </TextLink>
        }
      >
        <option>Option 1</option>
        <option>Option 2</option>
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
  {
    name: 'With a critical message',
    code: source(
      <Dropdown
        label="Label"
        placeholder="Please select"
        tone="critical"
        message="Critical message"
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>,
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      <Dropdown
        label="Label"
        placeholder="Please select"
        tone="positive"
        message="Positive message"
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>,
    ),
  },
];
