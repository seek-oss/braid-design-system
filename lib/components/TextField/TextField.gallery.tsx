import React, { useState } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { IconSearch, TextField, TextLink } from '../';
import source from '../../utils/source.macro';
import { IconHelp } from '../icons';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          onClear={() => setState('textfield', '')}
        />,
      ),
  },
  {
    label: 'With additional labels',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          secondaryLabel="optional"
          tertiaryLabel={
            <TextLink href="#">
              <IconHelp /> Help
            </TextLink>
          }
        />,
      ),
  },
  {
    label: 'With a description',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          onClear={() => setState('textfield', '')}
          description="Longer description of this field"
        />,
      ),
  },
  {
    label: 'TextField with icon',
    Example: ({ id }) => {
      const [value, setValue] = useState('');

      return (
        <TextField
          label="Job Title"
          id={id}
          icon={<IconSearch />}
          placeholder="Enter a job title"
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
      );
    },
  },
  {
    label: 'With a critical message',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={`${id}_1`}
          onChange={setState('textfield')}
          value={getState('textfield')}
          tone="critical"
          message="Critical message"
        />,
      ),
  },
  {
    label: 'With a positive message',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={`${id}_1`}
          onChange={setState('textfield')}
          value={getState('textfield')}
          tone="positive"
          message="Positive message"
        />,
      ),
  },
  {
    label: 'With a neutral message',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={`${id}_1`}
          onChange={setState('textfield')}
          value={getState('textfield')}
          tone="neutral"
          message="Neutral message"
        />,
      ),
  },
  {
    label: 'Disabled field',
    background: 'card',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={`${id}_1`}
          onChange={setState('textfield')}
          value={getState('textfield')}
          disabled={true}
        />,
      ),
  },
];
