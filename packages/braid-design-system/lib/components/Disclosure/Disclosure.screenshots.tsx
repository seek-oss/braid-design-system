import React, { useState } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Disclosure, Text } from '..';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Collapsed Disclosure',
      Example: ({ id }) => (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
        >
          <Text>Content</Text>
        </Disclosure>
      ),
    },
    {
      label: 'Expanded Disclosure',
      Example: ({ id }) => {
        const [expanded, setExpanded] = useState(true);

        return (
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            expanded={expanded}
            onToggle={setExpanded}
          >
            <Text>Content</Text>
          </Disclosure>
        );
      },
    },
    {
      label: 'Expanded Disclosure with custom space',
      Example: ({ id }) => {
        const [expanded, setExpanded] = useState(true);

        return (
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            space="small"
            expanded={expanded}
            onToggle={setExpanded}
          >
            <Text>Content</Text>
          </Disclosure>
        );
      },
    },
  ],
};
