import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Text, TextLink, TextLinkButton } from '..';
import source from '../../utils/source.macro';
import { Strong } from '../Strong/Strong';

const docs: ComponentDocs = {
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
    <>
      <Text>
        Even though it looks like a{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink>, this is
        actually a semantic button following the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#button">
          WAI-ARIA Button Pattern.
        </TextLink>
      </Text>

      <Text>
        Rather than rendering a native <Strong>button</Strong> element, we
        render a <Strong>span</Strong> element with an ARIA role of{' '}
        <Strong>button</Strong> so that text can wrap across multiple lines.
      </Text>
    </>
  ),
  additional: [
    {
      label: 'Note',
      description: (
        <Text>
          This component must be nested within a{' '}
          <TextLink href="/components/Text">Text</TextLink> or{' '}
          <TextLink href="/components/Heading">Heading</TextLink> component.
        </Text>
      ),
    },
  ],
};

export default docs;
