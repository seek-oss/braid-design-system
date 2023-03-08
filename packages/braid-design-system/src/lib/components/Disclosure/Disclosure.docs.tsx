import React from 'react';
import type { ComponentDocs } from 'site/types';
import { Disclosure, Text, TextLink, Strong } from '..';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id }) =>
    source(
      <Disclosure
        id={id}
        expandLabel="Show content"
        collapseLabel="Hide content"
      >
        <Text>Content</Text>
      </Disclosure>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/">
        WAI-ARIA Disclosure Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'Accordion',
      description: 'For a more prominent visual treatment.',
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
      label: 'Custom space',
      description: (
        <Text>
          The space between the disclosure label and content can be customised
          via the <Strong>space</Strong> prop.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', true)}

            <Disclosure
              id={id}
              expandLabel="Show content"
              collapseLabel="Hide content"
              expanded={getState('expanded')}
              onToggle={setState('expanded')}
              space="small"
            >
              <Text>Content</Text>
            </Disclosure>
          </>,
        ),
    },
    {
      label: 'Visual weight',
      description: (
        <Text>
          By default, the call to action will have the same affordance as{' '}
          <TextLink href="/components/TextLinkButton">TextLinkButton</TextLink>.
          Optionally, the visual weight can be decreased by setting{' '}
          <Strong>weight</Strong> to <Strong>weak</Strong>.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', false)}

            <Disclosure
              id={id}
              weight="weak"
              expandLabel="Show content"
              collapseLabel="Hide content"
              expanded={getState('expanded')}
              onToggle={setState('expanded')}
            >
              <Text>Content</Text>
            </Disclosure>
          </>,
        ),
    },
    {
      label: 'Inlining with content',
      description: (
        <Text>
          A Disclosure may also be nested within a sentence, i.e. inside a{' '}
          <TextLink href="/components/Text">Text</TextLink> or{' '}
          <TextLink href="/components/Heading">Heading</TextLink> component. In
          this case, the text size and tone will all be inherited from the
          parent typographic component.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', false)}

            <Text>
              Preceeding text content that is followed by a Disclosure.
              <Disclosure
                id={id}
                expandLabel="Show content"
                collapseLabel="Hide content"
                expanded={getState('expanded')}
                onToggle={setState('expanded')}
              >
                Content
              </Disclosure>
            </Text>
          </>,
        ),
    },
    {
      label: 'Managing state',
      description: (
        <Text>
          Disclosures manage their own state internally by default. If
          you&rsquo;d like to take control of the state yourself, you can pass{' '}
          <Strong>expanded</Strong> and <Strong>onToggle</Strong> props.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', true)}

            <Disclosure
              id={id}
              expandLabel="Show content"
              collapseLabel="Hide content"
              expanded={getState('expanded')}
              onToggle={setState('expanded')}
            >
              <Text>Content</Text>
            </Disclosure>
          </>,
        ),
    },
  ],
};

export default docs;
