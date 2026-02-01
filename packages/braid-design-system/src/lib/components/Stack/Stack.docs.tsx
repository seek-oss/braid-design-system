import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Stack, Text, TextLink, Strong, Divider, Notice } from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Stack space="large">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  description: (
    <Text>
      Defines the vertical rhythm of its child elements, interleaving a uniform
      amount of space between each element.
    </Text>
  ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Spacing',
      description: (
        <>
          <Text>
            The <TextLink href="/foundations/layout#spacing">spacing</TextLink>{' '}
            between children can be adjusted using the <Strong>space</Strong>{' '}
            prop.
          </Text>
          <Text>
            Responsive values are supported, e.g.{' '}
            <Strong>
              {
                "space={{ mobile: 'small', tablet: 'medium', desktop: 'large', wide: 'xlarge' }}"
              }
            </Strong>
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack
            space={{
              mobile: 'small',
              tablet: 'medium',
              desktop: 'large',
              wide: 'xlarge',
            }}
            align="center"
          >
            <Placeholder height={40} width={40} />
            <Placeholder height={40} width={60} />
            <Placeholder height={40} width={80} />
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      description: (
        <>
          <Text>
            Items can be aligned horizontally using the <Strong>align</Strong>{' '}
            prop. Responsive values are supported, e.g.{' '}
            <Strong>{"align={{ mobile: 'center', tablet: 'left' }}"}</Strong>
          </Text>
          <Notice>
            <Text>
              As a convenience, the <Strong>align</Strong> prop also sets the
              text alignment for the container. This can be overridden by
              setting alignment explicitly on the relevant{' '}
              <TextLink href="/components/Text#alignment">Text</TextLink> or{' '}
              <TextLink href="/components/Heading#alignment">Heading</TextLink>{' '}
              component.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Stack space="gutter" align="left">
              <Placeholder width={60} height={40} label="left" />
              <Placeholder width={80} height={40} />
              <Placeholder width={60} height={40} />
            </Stack>
            <Divider />
            <Stack space="gutter" align="center">
              <Placeholder width={60} height={40} />
              <Placeholder width={80} height={40} label="center" />
              <Placeholder width={60} height={40} />
            </Stack>
            <Divider />
            <Stack space="gutter" align="right">
              <Placeholder width={60} height={40} />
              <Placeholder width={80} height={40} />
              <Placeholder width={60} height={40} label="right" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Semantic elements',
      description: (
        <Text>
          By default, Stack renders a <Strong>div</Strong> element. You can
          customise this via the <Strong>component</Strong> prop.
        </Text>
      ),
      code: source(
        <Stack component="span" space="small">
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>,
      ).code,
    },
    dataAttributeDocs({
      code: `
        <Stack
          data={{ testid: 'stack-1' }}
          // => data-testid="stack-1"
        >
          ...
        </Stack>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
