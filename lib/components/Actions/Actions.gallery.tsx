import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Actions, Button, TextLink } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Actions with Strong Button and TextLink',
    Example: () => (
      <Actions>
        <Button weight="strong">Strong</Button>
        <TextLink href="#">TextLink</TextLink>
      </Actions>
    ),
  },
  {
    label: 'Actions with Regular Button and Weak Button',
    Example: () => (
      <Actions>
        <Button weight="regular">Regular</Button>
        <Button weight="weak">Weak</Button>
      </Actions>
    ),
  },
  {
    label: 'Actions with Weak Buttons and Regular Button',
    Example: () => (
      <Actions>
        <Button weight="weak">Weak</Button>
        <Button weight="weak">Weak</Button>
        <Button weight="regular">Regular</Button>
      </Actions>
    ),
  },
];
