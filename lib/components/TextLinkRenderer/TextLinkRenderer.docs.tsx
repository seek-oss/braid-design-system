import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextLinkRenderer, Stack, Text, TextLink, Box } from '../';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>
        Allows you to render something that looks like a{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink> but is
        semantically something different, e.g. a button.
      </Text>
      <Text>
        If what you&rsquo;re rendering is semantically a link, consider using a{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink> instead.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'TextLink with Custom Renderer',
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
