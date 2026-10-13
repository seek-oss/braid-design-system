import source from '@braid-design-system/source.macro';

import {
  AccordionItem,
  Accordion,
  Placeholder,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Large',
    code: source(
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
    description: 'Large, without dividers',
    code: source(
      <Accordion dividers={false}>
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
    description: 'Standard',
    code: source(
      <Accordion size="standard">
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
    description: 'Standard, without dividers',
    code: source(
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
    description: 'Single open item',
    code: source(
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
    description: 'Single open item with a default value',
    code: source(
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
];
