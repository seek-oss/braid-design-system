import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Disclosure, Text, TextLink, Strong, Stack, Notice } from '..';
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
  ],
};

export default docs;
