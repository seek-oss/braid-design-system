import React from 'react';

import source from '../../utils/source.macro';
import {
  Accordion,
  AccordionItem,
  Placeholder,
} from '../../playroom/components';
import { ComponentExample } from '../../../site/src/types';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Large size with dividers',
    Example: () =>
      source(
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
        </Accordion>,
      ),
  },
  {
    label: 'Standard size without dividers',
    Example: () =>
      source(
        <Accordion size="standard" dividers={false}>
          <AccordionItem label="Item 1">
            <Placeholder height={100} />
          </AccordionItem>
          <AccordionItem label="Item 2">
            <Placeholder height={100} />
          </AccordionItem>
          <AccordionItem label="Item 3">
            <Placeholder height={100} />
          </AccordionItem>
        </Accordion>,
      ),
  },
];
