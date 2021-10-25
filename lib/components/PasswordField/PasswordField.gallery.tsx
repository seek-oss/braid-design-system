import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { PasswordField, TextLink } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
        />,
      ),
  },
  {
    label: 'With additional labels',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
          secondaryLabel="optional"
          tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
        />,
      ),
  },
  {
    label: 'With a description',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
          description="Longer description of this field"
        />,
      ),
  },
  {
    label: 'With a critical message',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
          tone="critical"
          message="Critical message"
        />,
      ),
  },
  {
    label: 'With a positive message',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
          tone="positive"
          message="Positive message"
        />,
      ),
  },
  {
    label: 'With a neutral message',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
          tone="neutral"
          message="Neutral message"
        />,
      ),
  },
  {
    label: 'Disabled field',
    background: 'surface',
    Example: ({ id, getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          id={id}
          onChange={setState('passwordfield')}
          value={getState('passwordfield')}
          disabled={true}
        />,
      ),
  },
];
