import React from 'react';
import { Actions, Button } from '../../playroom/components';
import source from '@braid-design-system/source.macro';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard size',
    code: source(
      <Actions>
        <Button>Button 1</Button>
        <Button variant="transparent">Button 2</Button>
      </Actions>,
    ),
  },
  {
    name: 'Small size',
    code: source(
      <Actions size="small">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="transparent">Button 3</Button>
      </Actions>,
    ),
  },
];
