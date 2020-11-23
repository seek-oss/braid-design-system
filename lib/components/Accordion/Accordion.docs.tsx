import React, { useState } from 'react';
import { ComponentDetail } from '../../../site/src/types';
import { Accordion, AccordionItem, Stack, Text, TextLink } from '../';
import { Strong } from '../Strong/Strong';
import { Box } from '../Box/Box';

const docs: ComponentDetail = {
  category: 'Content',
  subComponents: ['AccordionItem'],
  migrationGuide: true,
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
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices/#disclosure">
        WAI-ARIA Disclosure Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    { name: 'Disclosure', description: 'For a lighter visual treatment.' },
  ],
  additional: [
    {
      label: 'Managing state',
      description: (
        <Text>
          Accordion items manage their own state internally by default. If
          you&rsquo;d like to take control of the state yourself, you can pass
          &ldquo;expanded&rdquo; and &ldquo;onToggle&rdquo; props to
          AccordionItem.
        </Text>
      ),
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
      label: 'Customising the layout',
      description: (
        <Stack space="large">
          <Text>
            <Strong>AccordionItem</Strong> elements can be rendered outside of
            an enclosing <Strong>Accordion</Strong> if you&rsquo;d like to
            customise their surrounding layout.
          </Text>
          <Text>
            By default, an <Strong>AccordionItem</Strong> does not allow
            consumers to control the use of white space or its dividers. If
            there is a need to diverge from the standard design, an{' '}
            <Strong>AccordionItem</Strong> may be used outside of an{' '}
            <Strong>Accordion</Strong>.
          </Text>
          <Text>
            Worth noting, as the label is a heading for the expandable section,
            it uses level 4{' '}
            <TextLink href="/components/Heading">Heading</TextLink> styles and
            cannot be customised.
          </Text>
        </Stack>
      ),
      Example: () => (
        <Box boxShadow="borderField" borderRadius="standard" padding="xlarge">
          <Stack space="xlarge" dividers="strong">
            <AccordionItem label="Label" id="first">
              <Text>Content</Text>
            </AccordionItem>
            <AccordionItem label="Label" id="second">
              <Text>Content</Text>
            </AccordionItem>
          </Stack>
        </Box>
      ),
    },
  ],
};

export default docs;
