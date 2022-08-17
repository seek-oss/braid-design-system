import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { FieldLabel, TextLink } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id }) => source(<FieldLabel htmlFor={id} label="Label" />),
  },
  {
    label: 'With secondary label',
    Example: ({ id }) =>
      source(
        <FieldLabel
          htmlFor={id}
          label="Label"
          secondaryLabel="Secondary label"
        />,
      ),
  },
  {
    label: 'With tertiary label',
    Example: ({ id }) =>
      source(
        <FieldLabel
          htmlFor={id}
          label="Label"
          tertiaryLabel={<TextLink href="#">Tertiary label</TextLink>}
        />,
      ),
  },
  {
    label: 'With all types',
    Example: ({ id }) =>
      source(
        <FieldLabel
          htmlFor={id}
          label="Label"
          secondaryLabel="Secondary label"
          tertiaryLabel={<TextLink href="#">Tertiary label</TextLink>}
        />,
      ),
  },
];
