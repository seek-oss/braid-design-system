import React from 'react';
import {
  AccordionItem,
  Accordion,
  Placeholder,
} from '../../playroom/components';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Large',
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
    name: 'Large, without dividers',
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
    name: 'Standard',
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
    name: 'Standard, without dividers',
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
    name: 'Large standalone item',
    code: source(
      <AccordionItem label="Label">
        <Placeholder height={100} />
      </AccordionItem>,
    ),
  },
  {
    name: 'Standard standalone item',
    code: source(
      <AccordionItem label="Label" size="standard">
        <Placeholder height={100} />
      </AccordionItem>,
    ),
  },
];
