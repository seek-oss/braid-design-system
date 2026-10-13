import source from '@braid-design-system/source.macro';
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
            <AccordionItem value="item-1" label="Item 1">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-2" label="Item 2">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-3" label="Item 3">
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
            <AccordionItem value="item-1" label="Item 1">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-2" label="Item 2">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-3" label="Item 3">
              <Placeholder height={100} />
            </AccordionItem>
          </Accordion>,
        ),
    },
    {
      label: 'Single open item',
      Example: () =>
        source(
          <Accordion multiple={false}>
            <AccordionItem value="item-1" label="Item 1">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-2" label="Item 2">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-3" label="Item 3">
              <Placeholder height={100} />
            </AccordionItem>
          </Accordion>,
        ),
    },
    {
      label: 'Single open item with a default value',
      Example: () =>
        source(
          <Accordion multiple={false} defaultValue="item-1">
            <AccordionItem value="item-1" label="Item 1">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-2" label="Item 2">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-3" label="Item 3">
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
            <AccordionItem value="item-1" label="Item 1">
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem
              value="item-2"
              label="Item 2"
              badge={
                <Badge tone="promote" weight="strong">
                  Badge
                </Badge>
              }
            >
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-3" label="Item 3">
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
            <AccordionItem value="item-1" label="Item 1" icon={<IconImage />}>
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-2" label="Item 2" icon={<IconImage />}>
              <Placeholder height={100} />
            </AccordionItem>
            <AccordionItem value="item-3" label="Item 3" icon={<IconImage />}>
              <Placeholder height={100} />
            </AccordionItem>
          </Accordion>,
        ),
    },
  ],
};
