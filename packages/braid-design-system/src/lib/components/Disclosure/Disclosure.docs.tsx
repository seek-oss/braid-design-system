import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Disclosure, Text, TextLink, Strong, Stack, Notice, List } from '..';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A single section of inline content that can be expanded and collapsed by
      the user.
    </Text>
  ),
  Example: () =>
    source(
      <Disclosure expandLabel="Show content" collapseLabel="Hide content">
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
      description:
        'For revealing sections of content in a vertically stacked list.',
    },
    {
      name: 'Tabs',
      description: 'For a horizontal selection of multiple content panels.',
    },
    {
      name: 'Dialog',
      description:
        'For exposing additional content in a modal with rich formatting.',
    },
    {
      name: 'Drawer',
      description:
        'For exposing complex content or capturing user input in a modal panel.',
    },
  ],
  additional: [
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
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', false)}

            <Disclosure
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
      label: 'Size',
      description: (
        <>
          <Text>
            The size can be customised via the <Strong>size</Strong> prop, which
            accepts the same sizes as the{' '}
            <TextLink href="/components/Text">Text</TextLink> component.
          </Text>
          <Notice>
            <Text>
              The provided <Strong>size</Strong> will also be used as the
              default size for <TextLink href="/components/Text">Text</TextLink>{' '}
              components within the content of the disclosure.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ handler }) =>
        source(
          <Stack space="large">
            <Disclosure
              expandLabel="Large size"
              size="large"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>large</Strong> text size
              </Text>
            </Disclosure>
            <Disclosure
              expandLabel="Standard size"
              size="standard"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>standard</Strong> text size
              </Text>
            </Disclosure>
            <Disclosure
              expandLabel="Small size"
              size="small"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>small</Strong> text size
              </Text>
            </Disclosure>
            <Disclosure
              expandLabel="Xsmall size"
              size="xsmall"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>xsmall</Strong> text size
              </Text>
            </Disclosure>
          </Stack>,
        ),
    },
    {
      label: 'Spacing',
      description: (
        <Text>
          The default space between the disclosure label and content will be
          determined by the <TextLink href="#size">size</TextLink>.
          Alternatively, this can be tailored via the <Strong>space</Strong>{' '}
          prop.
        </Text>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', true)}

            <Disclosure
              expandLabel="Show content"
              collapseLabel="Hide content"
              expanded={getState('expanded')}
              onToggle={setState('expanded')}
              space="large"
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
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', false)}

            <Text>
              Preceding text content that is followed by a Disclosure.
              <Disclosure
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
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('expanded', true)}

            <Disclosure
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
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Disclosure:</Text>
            <List space="large">
              <Text>to display a single section of collapsable content</Text>
              <Text>
                to reveal optional content, such as explanatory text or further
                details.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Disclosure:</Text>
            <List space="large">
              <Text>
                if the information is needed for the user to complete their
                current task (make it visible upfront instead)
              </Text>
              <Text>
                to display multiple sections of collapsable content (consider
                using an{' '}
                <TextLink href="/components/Accordion">Accordion</TextLink>{' '}
                instead)
              </Text>
              <Text>
                to display complex content including images or CTAs (consider
                using a <TextLink href="/components/Dialog">Dialog</TextLink>{' '}
                instead)
              </Text>
              <Text>
                to provide a short definition of what something means (consider
                using a{' '}
                <TextLink href="/components/TooltipRenderer">
                  TooltipRenderer
                </TextLink>{' '}
                instead).
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
    dataAttributeDocs({
      code: `
        <Disclosure
          data={{ testid: 'disclosure-1' }}
          // => data-testid="disclosure-1"
        >
          ...
        </Disclosure>
      `,
      supportsNativeSyntax: false,
    }),
    {
      label: 'Content guidelines',
      description: (
        <Stack space="large">
          <List space="large">
            <Text>
              A Disclosure supports rich content but may be best suited for
              simple text and links.
            </Text>
            <Text>
              Be mindful that a Disclosure will push down the content below it.
              Ideally keep it&rsquo;s content to a few sentences or a single
              paragraph.
            </Text>
          </List>
        </Stack>
      ),
    },
  ],
};

export default docs;
