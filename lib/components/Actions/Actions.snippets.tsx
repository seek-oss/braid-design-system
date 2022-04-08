import React from 'react';
import { Actions, Button, IconDelete } from '../../playroom/components';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'With multiple buttons',
    code: source(
      <Actions>
        <Button>Submit</Button>
        <Button variant="transparent">Cancel</Button>
      </Actions>,
    ),
  },
  {
    name: 'With a branded action',
    code: source(
      <Actions>
        <Button tone="brandAccent">Submit</Button>
        <Button variant="transparent">Cancel</Button>
      </Actions>,
    ),
  },
  {
    name: 'With a destructive action',
    code: source(
      <Actions>
        <Button tone="critical" icon={<IconDelete />}>
          Delete
        </Button>
        <Button variant="transparent">Cancel</Button>
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
