import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Dropdown, IconLocation, IconHelp, TextLink } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
  {
    label: 'With option groups',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
        >
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
    label: 'With additional labels',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
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
    label: 'With a description',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
          description="Extra information about the field"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
  {
    label: 'With an icon',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
          icon={<IconLocation />}
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
  {
    label: 'With a critical message',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
          tone="critical"
          message="Critical message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
  {
    label: 'With a positive message',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
          tone="positive"
          message="Positive message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
  {
    label: 'Disabled field',
    background: 'surface',
    Example: ({ id, getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          id={id}
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          disabled={true}
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
];
