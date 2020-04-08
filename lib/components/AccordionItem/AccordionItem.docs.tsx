import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Stack, Text } from '../';
import { AccordionItem as PlayroomAccordionItem } from '../../playroom/components';
import accordionDocs from '../Accordion/Accordion.docs';

const docs: ComponentDocs = {
  ...accordionDocs,
  examples: accordionDocs.examples.map((example) => ({
    ...example,
    storybook: false,
  })),
  snippets: [
    {
      name: 'Standalone',
      code: (
        <PlayroomAccordionItem label="Label">
          <Stack space="large">
            <Text>Content</Text>
          </Stack>
        </PlayroomAccordionItem>
      ),
    },
  ],
};

export default docs;
