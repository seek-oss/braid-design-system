import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextLinkRenderer, Stack, Text, TextLink, Box } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  deprecationWarning: (
    <Text weight="medium">
      This component has been deprecated. Use{' '}
      <TextLink href="/components/TextLink">TextLink</TextLink> or{' '}
      <TextLink href="/components/TextLinkButton">TextLinkButton</TextLink>{' '}
      instead.
    </Text>
  ),
  Example: () =>
    source(
      <Text>
        <TextLinkRenderer reset={false}>
          {(textLinkProps) => (
            <Box component="button" {...textLinkProps}>
              Visually a link
            </Box>
          )}
        </TextLinkRenderer>
        , rendered as a button.
      </Text>,
    ),
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
        If you think you have a legitimate use case for it, please let us know.
      </Text>
    </Stack>
  ),
  alternatives: [],
};

export default docs;
