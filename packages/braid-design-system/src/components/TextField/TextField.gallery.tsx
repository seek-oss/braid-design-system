import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { IconSearch, IconHelp, TextField, TextLink } from '../';
import source from '../../utils/source.macro';

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
    label: 'With a critical message',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Label"
          id={id}
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
          id={id}
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
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          tone="neutral"
          message="Neutral message"
        />,
      ),
  },
  {
    label: 'With an icon',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Job Title"
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          icon={<IconSearch />}
          placeholder="Enter a job title"
        />,
      ),
  },
  {
    label: 'With a prefix',
    Example: ({ id, getState, setState }) =>
      source(
        <TextField
          label="Phone number"
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          prefix="+61"
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
          id={id}
          onChange={setState('textfield')}
          value={getState('textfield')}
          disabled={true}
        />,
      ),
  },
];
