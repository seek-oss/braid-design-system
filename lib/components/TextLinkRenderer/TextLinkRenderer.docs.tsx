import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextLinkRenderer, Stack, Text, TextLink, Box } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  gallery: false,
  description: (
    <Stack space="large">
      <Text>
        This component is mainly provided for backwards compatibility. If
        you&rsquo;re wanting to render a button that looks like a{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink>, you should
        use a{' '}
        <TextLink href="/components/TextLinkButton">TextLinkButton</TextLink>{' '}
        instead.
      </Text>
      <Text>
        In fact, we&rsquo;re honestly not quite sure why you&rsquo;d need this
        component anymore. If you think you&rsquo;ve found a legitimate use case
        for it, please let us know so we can provide better documentation.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'TextLink with Custom Renderer',
      showCodeByDefault: true,
      Example: () => (
        <Text>
          Even though it looks like a link, the last word of this sentence is
          actually a{' '}
          <TextLinkRenderer>
            {(textLinkProps) => (
              <Box component="button" {...textLinkProps}>
                button.
              </Box>
            )}
          </TextLinkRenderer>
        </Text>
      ),
      code: `
        import React from 'react';
        import { TextLinkRenderer, Text, Box } from 'braid-design-system';

        export default () => (
          <Text>
            Even though it looks like a link, the last word of this sentence
            is actually a{' '}
            <TextLinkRenderer>
              {(textLinkProps) => (
                <Box component="button" {...textLinkProps}>
                  button.
                </Box>
              )}
            </TextLinkRenderer>
          </Text>
        );
      `,
    },
  ],
};

export default docs;
