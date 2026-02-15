import source from '@braid-design-system/source.macro';

import {
  AccordionItem,
  Accordion,
  Badge,
  Placeholder,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Large',
    code: source(
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
    description: 'Large, without dividers',
    code: source(
      <Accordion dividers={false}>
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
    description: 'Standard',
    code: source(
      <Accordion size="standard">
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
    description: 'Standard, without dividers',
    code: source(
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
    description: 'Large standalone item',
    code: source(
      <AccordionItem label="Label">
        <Placeholder height={100} />
      </AccordionItem>,
    ),
  },
  {
    description: 'Standard standalone item',
    code: source(
      <AccordionItem label="Label" size="standard">
        <Placeholder height={100} />
      </AccordionItem>,
    ),
  },
  {
    description: 'Standalone item with a badge',
    code: source(
      <AccordionItem
        label="Label"
        badge={
          <Badge tone="promote" weight="strong">
            Badge
          </Badge>
        }
      >
        <Placeholder height={100} />
      </AccordionItem>,
    ),
  },
];
