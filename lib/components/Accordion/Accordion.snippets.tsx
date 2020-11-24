import React from 'react';
import {
  AccordionItem,
  Accordion,
  Placeholder,
} from '../../playroom/components';
import { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <Accordion>
        <AccordionItem label="Item 1">
          <Placeholder height={100} />
        </AccordionItem>
        <AccordionItem label="Item 2">
          <Placeholder height={100} />
        </AccordionItem>
        <AccordionItem label="Item 3">
          <Placeholder height={100} />
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'Standalone item',
    code: (
      <AccordionItem label="Label">
        <Placeholder height={100} />
      </AccordionItem>
    ),
  },
];
