import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Accordion, AccordionItem, Stack, Text, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['AccordionItem'],
  migrationGuide: true,
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#disclosure">
          WAI-ARIA Disclosure Pattern.
        </TextLink>
      </Text>
      <Text>
        Accordion items manage their own state internally by default. If
        you&rsquo;d like to take control of the state yourself, you can pass
        &ldquo;expanded&rdquo; and &ldquo;onToggle&rdquo; props to
        AccordionItem.
      </Text>
      <Text>
        <TextLink href="/components/AccordionItem">AccordionItem</TextLink>{' '}
        elements can be rendered outside of an enclosing{' '}
        <TextLink href="/components/Accordion">Accordion</TextLink> if
        you&rsquo;d like to customise their surrounding layout.
      </Text>
      <Text tone="secondary">
        If you want a lighter visual treatment for standalone accordion items,
        check out <TextLink href="/components/Disclosure">Disclosure.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
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
    {
      label: 'Standalone AccordionItem',
      Example: ({ id }) => (
        <AccordionItem label="Label" id={id}>
          <Text>Content</Text>
        </AccordionItem>
      ),
    },
  ],
};

export default docs;
