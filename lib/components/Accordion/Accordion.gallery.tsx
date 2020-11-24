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
    label: 'Standard',
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
];
