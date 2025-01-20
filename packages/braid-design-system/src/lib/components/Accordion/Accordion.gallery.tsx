import source from '@braid-design-system/source.macro';
import React from 'react';
import type { GalleryComponent } from 'site/types';

import {
  Accordion,
  AccordionItem,
  Badge,
  IconImage,
  Placeholder,
} from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
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
    {
      label: 'With a Badge',
      Example: () =>
        source(
          <Accordion size="standard" dividers={false}>
            <AccordionItem label="Item 1">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem
              label="Item 2"
              badge={
                <Badge tone="promote" weight="strong">
                  Badge
                </Badge>
              }
            >
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem label="Item 3">
              <Placeholder height={100} />
            </AccordionItem>
          </Accordion>,
        ),
    },
    {
      label: 'With an icon',
      Example: () =>
        source(
          <Accordion size="standard" dividers={false}>
            <AccordionItem label="Item 1" icon={<IconImage />}>
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem label="Item 2" icon={<IconImage />}>
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem label="Item 3" icon={<IconImage />}>
              <Placeholder height={100} />
            </AccordionItem>
          </Accordion>,
        ),
    },
  ],
};
