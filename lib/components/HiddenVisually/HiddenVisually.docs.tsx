import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { HiddenVisually } from './HiddenVisually';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Layout',
  description: (
    <Text>
      Provides content to assistive technologies while hiding it from the
      screen.
    </Text>
  ),
  examples: [
    {
      label: 'Inside Text',
      showCodeByDefault: true,
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
