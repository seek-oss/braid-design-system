import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { ButtonLink, Strong, Text, Inline } from '../';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Inline space="small" collapseBelow="desktop">
        <ButtonLink href="#" variant="solid">
          Solid
        </ButtonLink>
        <ButtonLink href="#" variant="ghost">
          Ghost
        </ButtonLink>
        <ButtonLink href="#" variant="soft">
          Soft
        </ButtonLink>
        <ButtonLink href="#" variant="transparent">
          Transparent
        </ButtonLink>
      </Inline>,
    ),
  accessibility: (
    <Text>
      Even though it looks like a{' '}
      <TextLink href="/components/Button">Button</TextLink>, this is actually a
      semantic link.
    </Text>
  ),
  alternatives: [
    {
      name: 'Button',
      description: 'For a semantic button.',
    },
    {
      name: 'ButtonIcon',
      description: 'For buttons containing only an icon.',
    },
    {
      name: 'TextLinkButton',
      description: 'For a semantic button that looks like a TextLink.',
    },
  ],
  additional: [
    {
      label: 'Custom link rendering',
      description: (
        <Text>
          This component renders a native <Strong>a</Strong> element by default,
          but this can be customised via the <Strong>linkComponent</Strong> prop
          on <TextLink href="/components/BraidProvider">BraidProvider</TextLink>
          .
        </Text>
      ),
    },
  ],
};

export default docs;
