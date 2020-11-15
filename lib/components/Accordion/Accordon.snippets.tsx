import React from 'react';
import {
  AccordionItem,
  Accordion,
  Stack,
  Text,
} from '../../playroom/components';
import { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: '2 items',
    code: (
      <Accordion>
        <AccordionItem label="Label">
          <Stack space="large">
            <Text>Content</Text>
          </Stack>
        </AccordionItem>
        <AccordionItem label="Label">
          <Stack space="large">
            <Text>Content</Text>
          </Stack>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: '3 items',
    code: (
      <Accordion>
        <AccordionItem label="Label">
          <Stack space="large">
            <Text>Content</Text>
          </Stack>
        </AccordionItem>
        <AccordionItem label="Label">
          <Stack space="large">
            <Text>Content</Text>
          </Stack>
        </AccordionItem>
        <AccordionItem label="Label">
          <Stack space="large">
            <Text>Content</Text>
          </Stack>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'Standalone item',
    code: (
      <AccordionItem label="Label">
        <Stack space="large">
          <Text>Content</Text>
        </Stack>
      </AccordionItem>
    ),
  },
];
