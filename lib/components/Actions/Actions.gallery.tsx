import React from 'react';
import source from '../../utils/source.macro';
import { ComponentExample } from '../../../site/src/types';
import { Actions, Button, IconDelete } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'With multiple buttons',
    Example: () =>
      source(
        <Actions>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>,
      ),
  },
  {
    label: 'With a branded action',
    Example: () =>
      source(
        <Actions>
          <Button tone="brandAccent">Button 1</Button>
          <Button variant="transparent">Button 2</Button>
        </Actions>,
      ),
  },
  {
    label: 'With a destructive action',
    Example: () =>
      source(
        <Actions>
          <Button tone="critical">
            <IconDelete /> Delete
          </Button>
          <Button variant="transparent">Cancel</Button>
        </Actions>,
      ),
  },
  {
    label: 'Small size',
    Example: () =>
      source(
        <Actions size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>,
      ),
  },
];
