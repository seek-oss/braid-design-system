import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Accordion,
  AccordionItem,
  Badge,
  Text,
  TextLink,
  Strong,
  IconImage,
  List,
  Stack,
} from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A vertically stacked list of panels that expand and collapse to reveal
      sections of content.
    </Text>
  ),
  subComponents: ['AccordionItem'],
  Example: () =>
    source(
      <Accordion>
        <AccordionItem label="Accordion item 1">
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem label="Accordion item 2">
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem label="Accordion item 3">
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>,
    ),
  accessibility: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/">
          WAI-ARIA Disclosure Pattern
        </TextLink>
        . Each item is a disclosure, including when{' '}
        <Strong>autoCollapse</Strong> is set. This is not the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
          Accordion Pattern
        </TextLink>{' '}
        (no heading wrapper or arrow-key movement between items).
      </Text>
      <Text>
        Collapsed panels stay in the document at zero height so they can
        animate, with <Strong>visibility: hidden</Strong>,{' '}
        <Strong>aria-hidden</Strong> and <Strong>inert</Strong>. That replaces{' '}
        <Strong>display: none</Strong>. Find-in-page or print behaviour can
        differ.
      </Text>
    </Stack>
  ),
  alternatives: [
    {
      name: 'Dialog',
      description:
        'For exposing additional content in a modal with rich formatting.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing optional content inline with a light visual treatment.',
    },
    {
      name: 'Tabs',
      description:
        'For presenting multiple sections of content in horizontal panels.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Visual prominence',
        description: (
          <Text>
            You can specify the <Strong>size</Strong>, <Strong>tone</Strong> and{' '}
            <Strong>weight</Strong> props, and optionally set the{' '}
            <Strong>dividers</Strong> prop to <Strong>false.</Strong>
          </Text>
        ),
        Example: () =>
          source(
            <Accordion
              size="standard"
              tone="secondary"
              weight="regular"
              dividers={false}
            >
              <AccordionItem label="Accordion item 1">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 2">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 3">
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>,
          ),
      },
      {
        label: 'Space',
        deprecated: true,
        description: (
          <Text>
            The <Strong>space</Strong> prop is deprecated. Spacing between items
            is now automatically derived from the <Strong>size</Strong> prop and
            will be removed in a future release.
          </Text>
        ),
        Example: () =>
          source(
            <Accordion space="large">
              <AccordionItem label="Accordion item 1">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 2">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 3">
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>,
          ),
      },
      {
        label: 'Badges',
        description: (
          <Text>
            Add an optional <TextLink href="/components/Badge">Badge</TextLink>{' '}
            alongside the label of the AccordionItem using the{' '}
            <Strong>badge</Strong> prop.
          </Text>
        ),
        Example: () =>
          source(
            <Accordion>
              <AccordionItem label="Accordion item 1">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem
                label="Accordion item 2"
                badge={
                  <Badge tone="promote" weight="strong">
                    Badge
                  </Badge>
                }
              >
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 3">
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>,
          ),
      },
      {
        label: 'Icons',
        description: (
          <>
            <Text>
              For decoration or help distinguishing between accordion items, an{' '}
              <Strong>icon</Strong> can be provided. This will be placed to the
              left of the label.
            </Text>
          </>
        ),
        Example: () =>
          source(
            <Accordion>
              <AccordionItem label="Accordion item 1" icon={<IconImage />}>
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 2" icon={<IconImage />}>
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 3" icon={<IconImage />}>
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>,
          ),
      },
    ],
    interaction: [
      {
        label: 'Auto collapse',
        description: (
          <Stack space="large">
            <Text>
              Set the <Strong>autoCollapse</Strong> prop to ensure only one item
              can be expanded at a time. Opening an item will close any other
              open item. Clicking the open item will collapse it. Accordions
              with <Strong>autoCollapse</Strong> start with all items collapsed.
            </Text>
            <Text>
              Item-level <Strong>expanded</Strong> cannot be used with{' '}
              <Strong>autoCollapse</Strong>. Expansion is managed by the
              Accordion, which always starts collapsed. There is no controlled
              autoCollapse API in this release.
            </Text>
            <Text>
              <Strong>onToggle</Strong> fires on the item that was clicked. If
              another item was open, that item also receives{' '}
              <Strong>onToggle(false)</Strong>. To start an item open, omit{' '}
              <Strong>autoCollapse</Strong> and control{' '}
              <Strong>expanded</Strong> yourself (see Managing state).
            </Text>
          </Stack>
        ),
        Example: () =>
          source(
            <Accordion autoCollapse>
              <AccordionItem label="Accordion item 1">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 2">
                <Placeholder height={80} />
              </AccordionItem>
              <AccordionItem label="Accordion item 3">
                <Placeholder height={80} />
              </AccordionItem>
            </Accordion>,
          ),
      },
      {
        label: 'Managing state',
        description: (
          <Stack space="large">
            <Text>
              An <Strong>AccordionItem</Strong>, by default, manages its own
              state internally. If you&rsquo;d like to take control of the
              state, you can do so using the <Strong>expanded</Strong> and{' '}
              <Strong>onToggle</Strong> props.
            </Text>
            <Text>
              To start an item open, initialise your state to{' '}
              <Strong>true</Strong>. Do not combine this with{' '}
              <Strong>autoCollapse</Strong>.
            </Text>
          </Stack>
        ),
        Example: ({ setDefaultState, getState, toggleState }) =>
          source(
            <>
              {setDefaultState('expanded1', false)}
              {setDefaultState('expanded2', true)}
              {setDefaultState('expanded3', false)}

              <Accordion>
                <AccordionItem
                  label="Accordion item 1"
                  expanded={getState('expanded1')}
                  onToggle={() => toggleState('expanded1')}
                >
                  <Placeholder height={80} />
                </AccordionItem>
                <AccordionItem
                  label="Accordion item 2"
                  expanded={getState('expanded2')}
                  onToggle={() => toggleState('expanded2')}
                >
                  <Placeholder height={80} />
                </AccordionItem>
                <AccordionItem
                  label="Accordion item 3"
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
    bestPractices: [
      {
        label: 'Content guidelines',
        description: (
          <Stack space="large">
            <List space="large">
              <Text>
                Avoid putting critical or high-priority content in an accordion,
                as users may not read it.
              </Text>
              <Text>
                Label your accordion items appropriately to help users decide
                which sections to read.
              </Text>
            </List>
          </Stack>
        ),
      },
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use an Accordion:</Text>
              <List space="large">
                <Text>
                  to shorten pages and reduce scrolling when content isn&rsquo;t
                  crucial to read in full (e.g. FYIs)
                </Text>
                <Text>
                  to display basic content such as text, links and occasional
                  images.
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use an Accordion:</Text>
              <List space="large">
                <Text>
                  if the information is needed for the user to complete their
                  current task (make it visible upfront instead)
                </Text>
                <Text>
                  to capture complex user input, such as in a form (consider
                  using a <TextLink href="/components/Drawer">Drawer</TextLink>{' '}
                  instead)
                </Text>
                <Text>
                  for a single section of content (consider using a{' '}
                  <TextLink href="/components/Disclosure">Disclosure</TextLink>{' '}
                  instead).
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
      dataAttributeDocs({
        code: `
          <Accordion
            data={{ testid: 'accordion-1' }}
            // => data-testid="accordion-1"
          >
            <AccordionItem
              data={{ testid: 'accordion-item-1' }}
              // => data-testid="accordion-item-1"
            >
              ...
            </AccordionItem>
          </Accordion>
        `,
        supportsNativeSyntax: false,
      }),
    ],
  },
};

export default docs;
