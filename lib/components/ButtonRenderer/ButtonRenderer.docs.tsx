import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Link } from 'react-router-dom';
import { ButtonRenderer, Stack, Inline, Text, TextLink } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  deprecationWarning: (
    <Text weight="medium">
      This component has been deprecated. Use{' '}
      <TextLink href="/components/Button">Button</TextLink> or{' '}
      <TextLink href="/components/ButtonLink">ButtonLink</TextLink> instead.
    </Text>
  ),
  Example: () =>
    source(
      <Inline space="small" collapseBelow="desktop">
        <ButtonRenderer>
          {(ButtonChildren, buttonProps) => (
            <Link to="#" {...buttonProps}>
              <ButtonChildren>Custom button element</ButtonChildren>
            </Link>
          )}
        </ButtonRenderer>
      </Inline>,
    ),
  description: (
    <Stack space="large">
      <Text>
        This component is mainly provided for backwards compatibility. If
        you&rsquo;re wanting to render a link that looks like a{' '}
        <TextLink href="/components/Button">Button</TextLink>, you should use a{' '}
        <TextLink href="/components/ButtonLink">ButtonLink</TextLink> instead.
      </Text>
      <Text>
        If you think you have a legitimate use case for it, please let us know.
      </Text>
    </Stack>
  ),
  alternatives: [],
};

export default docs;
