import source from '@braid-design-system/source.macro';
import React from 'react';
import type { ComponentDocs } from 'site/types';

import { Text } from '../Text/Text';

import { HiddenVisually } from './HiddenVisually';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Text>
        The next sentence is only available to screen readers.
        <HiddenVisually> Hello world.</HiddenVisually>
      </Text>,
    ),
  alternatives: [{ name: 'Hidden', description: 'For hiding content.' }],
  accessibility: (
    <Text>
      Provides content to assistive technologies while hiding it from the
      screen.
    </Text>
  ),
};

export default docs;
