import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { ContentBlock, Stack, TextLink } from '../';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { Placeholder } from '../private/Placeholder/Placeholder';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <ContentBlock width="small">
        <Placeholder height={100} />
      </ContentBlock>,
    ),
  description: (
    <Text>
      Provides a container to constrain the maximum width of the content it
      wraps.
    </Text>
  ),
  alternatives: [
    { name: 'PageBlock', description: 'For page-level layout blocks' },
  ],
  additional: [
    {
      label: 'Maximum width',
      description: (
        <Text>
          Use the <Strong>width</Strong> prop to adjust the maximum width of the
          container.
        </Text>
      ),
      Example: () =>
        source(
          <ContentBlock width="xsmall">
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
    {
      label: 'Alignment',
      description: (
        <Text>
          By default, the content will be center-aligned to its parent, but this
          can be customised via the <Strong>align</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <ContentBlock width="xsmall" align="center">
              <Placeholder height={100} label="Center aligned (default)" />
            </ContentBlock>
            <ContentBlock width="xsmall" align="left">
              <Placeholder height={100} label="Left aligned" />
            </ContentBlock>
          </Stack>,
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
        <ContentBlock
          data={{ testid: 'content-block-1' }}
          // => data-testid="content-block-1"
        >
          ...
        </ContentBlock>
      `,
    },
  ],
};

export default docs;
