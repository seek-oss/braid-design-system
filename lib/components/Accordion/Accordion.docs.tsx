import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Accordion, AccordionItem, Stack, Text, TextLink, Strong } from '../';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['AccordionItem'],
  migrationGuide: true,
  Example: ({ id }) =>
    source(
      <Accordion>
        <AccordionItem label="Accordion item 1" id={`${id}_1`}>
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem label="Accordion item 2" id={`${id}_2`}>
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem label="Accordion item 3" id={`${id}_3`}>
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>,
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
    {
      name: 'Disclosure',
      description: 'For a lighter visual treatment.',
    },
    {
      name: 'Tabs',
      description: 'For a horizontal selection of multiple content panels.',
    },
    {
      name: 'Dialog',
      description: 'For exposing a smaller amount of content in a modal.',
    },
    {
      name: 'Drawer',
      description: 'For exposing a larger amount of content in a modal.',
    },
  ],
  additional: [
    {
      label: 'Managing state',
      description: (
        <Text>
          An <Strong>AccordionItem</Strong>, by default, manages its own state
          internally. If you&rsquo;d like to take control of the state, you can
          do so using the <Strong>expanded</Strong> and{' '}
          <Strong>onToggle</Strong> props.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('expanded1', false)}
            {setDefaultState('expanded2', true)}
            {setDefaultState('expanded3', false)}

            <Accordion>
              <AccordionItem
                label="Accordion item 1"
                id={`${id}_1`}
                expanded={getState('expanded1')}
                onToggle={() => toggleState('expanded1')}
              >
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem
                label="Accordion item 2"
                id={`${id}_2`}
                expanded={getState('expanded2')}
                onToggle={() => toggleState('expanded2')}
              >
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem
                label="Accordion item 3"
                id={`${id}_3`}
                expanded={getState('expanded3')}
                onToggle={() => toggleState('expanded3')}
              >
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>
          </>,
        ),
    },
    {
      label: 'Customising the layout',
      description: (
        <Text>
          By default, an <Strong>AccordionItem</Strong> does not allow consumers
          to control the use of white space or its dividers. If there is a need
          to diverge from the standard design, an <Strong>AccordionItem</Strong>{' '}
          may be used outside of an <Strong>Accordion</Strong>.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Stack space="xlarge">
            <AccordionItem label="Label" id={`${id}_1`}>
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem label="Label" id={`${id}_2`}>
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem label="Label" id={`${id}_3`}>
              <Placeholder height={80} />
            </AccordionItem>
          </Stack>,
        ),
    },
  ],
};

export default docs;
