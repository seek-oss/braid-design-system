import React from 'react';
import source from '../../utils/source.macro';
import { ComponentExample } from '../../../site/src/types';
import { Actions, Button, TextLink } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'With strong Button and TextLink',
    Example: () =>
      source(
        <Actions>
          <Button weight="strong">Strong Button</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>,
      ),
  },
  {
    label: 'With multiple buttons and a TextLink',
    Example: () =>
      source(
        <Actions>
          <Button>Regular Button</Button>
          <Button weight="weak">Weak Button</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>,
      ),
  },
];
