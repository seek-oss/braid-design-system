import React from 'react';
import { Snippets } from '../private/Snippets';
import { Drawer, Placeholder } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Default',
    code: (
      <Drawer title="Drawer Heading" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>
    ),
  },
  {
    name: 'Small',
    code: (
      <Drawer title="Drawer Heading" width="small" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>
    ),
  },
  {
    name: 'Medium',
    code: (
      <Drawer title="Drawer Heading" width="medium" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>
    ),
  },
  {
    name: 'Large',
    code: (
      <Drawer title="Drawer Heading" width="large" open={true}>
        <Placeholder width="100%" height={100} />
      </Drawer>
    ),
  },
];
