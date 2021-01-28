import React from 'react';
import source from '../../utils/source.macro';
import { ComponentExample } from '../../../site/src/types';
import { Actions, Button, TextLink, IconDelete } from '../';

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
  {
    label: 'With destructive action',
    Example: () =>
      source(
        <Actions>
          <Button tone="critical">
            <IconDelete /> Delete
          </Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>,
      ),
  },
  {
    label: 'Small size',
    Example: () =>
      source(
        <Actions size="small">
          <Button>Regular Button</Button>
          <Button weight="weak">Weak Button</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>,
      ),
  },
];
