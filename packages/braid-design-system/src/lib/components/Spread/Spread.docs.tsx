import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Divider, Spread, Stack, Strong, Text, Tiles } from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Spread space="large">
        <Placeholder height={60} width={50} />
        <Placeholder height={60} width={80} />
      </Spread>,
    ),
  description: (
    <Text>
      <Strong>Spread</Strong> is a layout component used to justify content with
      both an equally distributed and a specified minimum amount of space in
      between each child.
    </Text>
  ),
  alternatives: [
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
    {
      name: 'Inline',
      description: 'For laying out flowing content that is allowed to wrap.',
    },
  ],
  additional: [
    {
      label: 'Direction',
      description: (
        <Text>
          By default, children are spread horizontally. Setting the{' '}
          <Strong>direction</Strong> prop to <Strong>vertical</Strong> will
          spread children vertically, consuming the full height of its
          container.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={3}>
            <Spread space="small" direction="vertical">
              <Placeholder height={60} />
              <Placeholder height={30} />
            </Spread>
            <Spread space="small" direction="vertical" alignY="center">
              <Placeholder height={30} />
              <Placeholder height={30} />
            </Spread>
            <Spread space="small" direction="vertical">
              <Placeholder height={90} />
              <Placeholder height={30} />
            </Spread>
          </Tiles>,
        ),
    },
    {
      label: 'Vertical alignment',
      description: (
        <>
          <Text>
            When spreading content of varying height, vertical alignment can be
            controlled using the <Strong>alignY</Strong> prop. Responsive values
            are supported.
          </Text>
          <Text tone="secondary" size="small">
            Note: Only applies when spreading horizontally.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Spread space="small" alignY="top">
              <Placeholder height={30} width={80} label="top" />
              <Placeholder height={100} width={50} />
            </Spread>
            <Divider />
            <Spread space="small" alignY="center">
              <Placeholder height={30} width={80} label="center" />
              <Placeholder height={100} width={50} />
            </Spread>
            <Divider />
            <Spread space="small" alignY="bottom">
              <Placeholder height={30} width={80} label="bottom" />
              <Placeholder height={100} width={50} />
            </Spread>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      description: (
        <>
          <Text>
            When spreading content of varying widths, horizontal alignment can
            be controlled using the <Strong>align</Strong> prop. Responsive
            values are supported.
          </Text>
          <Text tone="secondary" size="small">
            Note: Only applies when spreading vertically.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={3}>
            <Spread space="small" direction="vertical" align="left">
              <Placeholder height={60} width={80} label="left" />
              <Placeholder height={30} width={50} />
            </Spread>
            <Spread space="small" direction="vertical" align="center">
              <Placeholder height={30} width={80} label="center" />
              <Placeholder height={30} width={100} />
            </Spread>
            <Spread space="small" direction="vertical" align="right">
              <Placeholder height={90} width={80} label="right" />
              <Placeholder height={30} width={50} />
            </Spread>
          </Tiles>,
        ),
    },
    {
      label: 'Semantic elements',
      description: (
        <Text>
          By default, Spread renders a <Strong>div</Strong> element. You can
          customise this via the <Strong>component</Strong> prop.
        </Text>
      ),
      code: source(
        <Spread component="span" space="small">
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Spread>,
      ).code,
    },
    dataAttributeDocs({
      code: `
        <Spread
          data={{ testid: 'spread-1' }}
          // => data-testid="spread-1"
        >
          ...
        </Spread>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
