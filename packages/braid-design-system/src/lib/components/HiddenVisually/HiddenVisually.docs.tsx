import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { HiddenVisually } from './HiddenVisually';
import { Text } from '../Text/Text';

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
