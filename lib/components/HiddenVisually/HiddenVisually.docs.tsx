import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { HiddenVisually } from './HiddenVisually';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Layout',
  foundation: true,
  description: (
    <Text>
      Provides content to assistive technologies while hiding it from the
      screen.
    </Text>
  ),
  screenshotWidths: [320],
  examples: [
    {
      label: 'Inside Text',
      Example: () => (
        <Text>
          The next sentence is only available to screen readers.
          <HiddenVisually> Hello world.</HiddenVisually>
        </Text>
      ),
    },
  ],
};

export default docs;
