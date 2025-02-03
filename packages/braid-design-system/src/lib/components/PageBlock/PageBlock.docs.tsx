import source from '@braid-design-system/source.macro';
import { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';

import { Box, ContentBlock, PageBlock, Stack, TextLink } from '../';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { Placeholder } from '../private/Placeholder/Placeholder';

import { gutters, validPageBlockComponents } from './PageBlock';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <PageBlock width="medium">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  description: (
    <Text>
      Provides a top-level page container, constraining the content width (using{' '}
      <TextLink href="/components/ContentBlock">ContentBlock</TextLink>) while
      establishing common screen gutters on smaller devices.
    </Text>
  ),
  alternatives: [
    {
      name: 'ContentBlock',
      description: 'For controlled width layout blocks',
    },
  ],
  additional: [
    {
      label: 'Maximum width',
      description: (
        <>
          <Text>
            Use the <Strong>width</Strong> prop to adjust the maximum width of
            the page container. Choose from either <Strong>small</Strong>,{' '}
            <Strong>medium</Strong> or <Strong>large</Strong>.
          </Text>
          <Text>
            Setting the <Strong>width</Strong> to <Strong>full</Strong> will
            allow the content to grow to the full width while maintaining
            consistent screen gutters.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <PageBlock width="medium">
            <Placeholder height={100} />
          </PageBlock>,
        ),
    },
    {
      label: 'Screen gutters',
      description: (
        <>
          <Text>
            Establishes consistent responsive gutters between the content and
            the screen edge.
          </Text>
          <Text>
            Uses <Strong>{gutters.mobile}</Strong> space on{' '}
            <TextLink href="/css/breakpoints">mobile</TextLink> and the semantic{' '}
            <Strong>{gutters.tablet}</Strong> on{' '}
            <TextLink href="/css/breakpoints">tablet</TextLink> and above.
          </Text>
        </>
      ),
      Example: () => {
        const { value: visual } = source(
          <Stack space="xlarge">
            <Stack space="small">
              <Text tone="secondary" size="small">
                On “tablet” and above
              </Text>
              <Box background="promote" paddingX={gutters.tablet}>
                <ContentBlock width="medium">
                  <Box background="surface">
                    <Placeholder height={100} />
                  </Box>
                </ContentBlock>
              </Box>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Box
                background="promote"
                paddingX={gutters.mobile}
                maxWidth="xsmall"
              >
                <ContentBlock width="medium">
                  <Box background="surface">
                    <Placeholder height={100} />
                  </Box>
                </ContentBlock>
              </Box>
            </Stack>
          </Stack>,
        );

        const { code: codeDemo } = source(
          <Box background="promote">
            <PageBlock width="medium">
              <Box background="surface">
                <Placeholder height={100} />
              </Box>
            </PageBlock>
          </Box>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },

    {
      label: 'Custom semantics',
      description: (
        <Text>
          The HTML tag can be customised to ensure the underlying document
          semantics are meaningful. This can be done using the{' '}
          <Strong>component</Strong> prop and supports{' '}
          {validPageBlockComponents.map((c, i) => {
            const notLastTwo = validPageBlockComponents.length - 2;
            const joiningLastElements = i === notLastTwo ? ' and ' : '.';

            return (
              <Fragment key={c}>
                <Strong>{c}</Strong>
                {c === 'div' ? ' (default)' : ''}
                {i < notLastTwo ? ', ' : joiningLastElements}
              </Fragment>
            );
          })}
        </Text>
      ),
    },
    {
      label: 'Data attributes',
      description: (
        <>
          <Text>
            Braid components are very explicit about the properties they accept,
            which makes providing arbitrary{' '}
            <TextLink href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
              data attributes
            </TextLink>{' '}
            not possible. Instead, all Braid components accept a{' '}
            <Strong>data</Strong> prop, allowing a single collection of data
            attributes to be provided.
          </Text>
        </>
      ),
      code: `
        <PageBlock
          data={{ testid: 'page-block-1' }}
          // => data-testid="page-block-1"
        >
          ...
        </PageBlock>
      `,
    },
  ],
};

export default docs;
