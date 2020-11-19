import React, { useState } from 'react';

import { Accordion, AccordionItem, Text } from '../';
import { ComponentExample } from '../../../site/src/types';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Collapsed Accordion',
    Example: ({ id }) => (
      <Accordion>
        <AccordionItem label="Accordion item 1" id={`${id}_1`}>
          <Text>Accordion item content</Text>
        </AccordionItem>
        <AccordionItem label="Accordion item 2" id={`${id}_2`}>
          <Text>Accordion item content</Text>
        </AccordionItem>
        <AccordionItem label="Accordion item 3" id={`${id}_3`}>
          <Text>Accordion item content</Text>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    label: 'Expanded Accordion',
    Example: ({ id }) => {
      const [expanded1, setExpanded1] = useState(true);
      const [expanded2, setExpanded2] = useState(true);
      const [expanded3, setExpanded3] = useState(true);

      return (
        <Accordion>
          <AccordionItem
            label="Accordion item 1"
            id={`${id}_1`}
            expanded={expanded1}
            onToggle={setExpanded1}
          >
            <Text>Accordion item content</Text>
          </AccordionItem>
          <AccordionItem
            label="Accordion item 2"
            id={`${id}_2`}
            expanded={expanded2}
            onToggle={setExpanded2}
          >
            <Text>Accordion item content</Text>
          </AccordionItem>
          <AccordionItem
            label="Accordion item 3"
            id={`${id}_3`}
            expanded={expanded3}
            onToggle={setExpanded3}
          >
            <Text>Accordion item content</Text>
          </AccordionItem>
        </Accordion>
      );
    },
  },
];
