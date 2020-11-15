import React from 'react';
import { Actions, Button, TextLink } from '../../playroom/components';
import { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard Button, Text Link',
    code: (
      <Actions>
        <Button>Submit</Button>
        <TextLink href="#">Cancel</TextLink>
      </Actions>
    ),
  },
  {
    name: 'Strong Button, Text Link',
    code: (
      <Actions>
        <Button weight="strong">Submit</Button>
        <TextLink href="#">Cancel</TextLink>
      </Actions>
    ),
  },
  {
    name: 'Weak Button, Text Link',
    code: (
      <Actions>
        <Button weight="weak">Submit</Button>
        <TextLink href="#">Cancel</TextLink>
      </Actions>
    ),
  },
];
