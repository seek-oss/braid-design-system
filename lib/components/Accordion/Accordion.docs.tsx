import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Accordion, AccordionItem, Card, Text, TextLink, Strong } from '../';
import { Placeholder } from '../../playroom/components';
import { validSpaceValues } from './Accordion';

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
      label: 'Customising the appearance',
      description: (
        <>
          <Text>
            You can customise the <Strong>size</Strong> and{' '}
            <Strong>tone</Strong> props, and optionally set the{' '}
            <Strong>dividers</Strong> prop to <Strong>false.</Strong>
          </Text>
          <Text>
            While we aim to provide sensible defaults, you can also provide a
            custom <Strong>space</Strong> value to adjust the spacing between
            items. Note that, to ensure adequate space for touch targets, the{' '}
            <Strong>space</Strong> prop only accepts values of{' '}
            {validSpaceValues.map((value, i) => (
              <React.Fragment key={value}>
                {i === validSpaceValues.length - 1 ? ' and ' : ''}
                {i !== validSpaceValues.length - 1 && i !== 0 ? ', ' : ''}
                <Strong>“{value}”</Strong>
              </React.Fragment>
            ))}
            .
          </Text>
        </>
      ),
      Example: ({ id }) =>
        source(
          <Card>
            <Accordion
              size="standard"
              tone="secondary"
              space="xlarge"
              dividers={false}
            >
              <AccordionItem label="Accordion item 1" id={`${id}_1`}>
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 2" id={`${id}_2`}>
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 3" id={`${id}_3`}>
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>
          </Card>,
        ),
    },
    {
      label: 'Standalone items',
      description: (
        <Text>
          To allow further layout customisation, individual items can be
          rendered outside of an Accordion.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Card>
            <AccordionItem
              label="Standalone item"
              size="standard"
              tone="secondary"
              id={`${id}_1`}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Card>,
        ),
    },
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
  ],
};

export default docs;
