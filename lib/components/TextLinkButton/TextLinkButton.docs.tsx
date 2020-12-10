import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import { Text, TextLink, TextLinkButton } from '..';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';

const docs: ComponentDetail = {
  category: 'Content',
  Example: () =>
    source(
      <Text>
        <TextLinkButton>Visually a link, with button semantics</TextLinkButton>
      </Text>,
    ),
  alternatives: [
    { name: 'TextLink', description: 'For a semantic link.' },
    { name: 'Button', description: 'For a semantic button.' },
    {
      name: 'ButtonLink',
      description: 'For a semantic link that looks like a button.',
    },
  ],
  accessibility: (
    <Text>
      Even thought is looks like a{' '}
      <TextLink href="/component/TextLink">TextLink</TextLink>, this is actually
      a semantic button following the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices/#button">
        WAI-ARIA Button Pattern.
      </TextLink>
    </Text>
  ),
  additional: [
    {
      label: 'Note',
      description: (
        <Text>
          This component must be nested within a{' '}
          <TextLink href="/components/Text">Text</TextLink>,{' '}
          <TextLink href="/components/Heading">Heading</TextLink> or{' '}
          <TextLink href="/components/Actions">Actions</TextLink> component.
        </Text>
      ),
    },
    {
      label: 'Developer considerations',
      description: (
        <Text>
          This component renders a native <Strong>span</Strong> element with an
          ARIA role of “button” so that, unlike a standard button element, text
          can wrap across multiple lines.
        </Text>
      ),
    },
  ],
};

export default docs;
