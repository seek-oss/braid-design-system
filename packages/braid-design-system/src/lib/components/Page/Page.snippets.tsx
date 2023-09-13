import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Page, Placeholder } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Default',
    code: source(
      <Page footer={<Placeholder label="Footer" height={100} />}>
        <Placeholder label="Header" height={60} />
      </Page>,
    ),
  },
  {
    name: 'Footer below fold',
    code: source(
      <Page
        footer={<Placeholder label="Footer" height={100} />}
        footerPosition="belowFold"
      >
        <Placeholder label="Header" height={60} />
      </Page>,
    ),
  },
];
