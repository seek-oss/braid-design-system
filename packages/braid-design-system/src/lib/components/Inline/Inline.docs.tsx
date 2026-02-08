import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Divider,
  Inline,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
  Tiles,
} from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Inline space="small">
        <Placeholder width={20} height={48} />
        <Placeholder width={80} height={48} />
        <Placeholder width={40} height={48} />
        <Placeholder width={150} height={48} />
        <Placeholder width={120} height={48} />
        <Placeholder width={60} height={48} />
        <Placeholder width={40} height={48} />
        <Placeholder width={180} height={48} />
        <Placeholder width={100} height={48} />
        <Placeholder width={60} height={48} />
        <Placeholder width={120} height={48} />
        <Placeholder width={40} height={48} />
      </Inline>,
    ),
  description: (
    <Text>
      The <Strong>Inline</Strong> component is designed for laying out flowing
      content that is allowed to wrap over multiple lines.
    </Text>
  ),
  alternatives: [
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
    {
      name: 'Tiles',
      description: 'For laying out content over many columns and rows.',
    },
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
          <Inline
            space={{
              mobile: 'small',
              tablet: 'medium',
              desktop: 'large',
              wide: 'xlarge',
            }}
          >
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>,
        ),
    },
    {
      label: 'Vertical alignment',
      description: (
        <Text>
          Items of varying height can be vertically aligned using the{' '}
          <Strong>alignY</Strong> prop. Responsive values are supported.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium" align="center">
            <Inline space="small" alignY="top">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="top" />
              <Placeholder width={60} height={20} />
            </Inline>
            <Divider />
            <Inline space="small" alignY="center">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="center" />
              <Placeholder width={60} height={20} />
            </Inline>
            <Divider />
            <Inline space="small" alignY="bottom">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="bottom" />
              <Placeholder width={60} height={20} />
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      description: (
        <Text>
          Items can be aligned horizontally using the <Strong>align</Strong>{' '}
          prop. Responsive values are supported.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Inline space="small" align="left">
              <Placeholder width={60} height={50} label="left" />
              <Placeholder width={80} height={50} />
              <Placeholder width={60} height={50} />
            </Inline>
            <Divider />
            <Inline space="small" align="center">
              <Placeholder width={60} height={50} />
              <Placeholder width={80} height={50} label="center" />
              <Placeholder width={60} height={50} />
            </Inline>
            <Divider />
            <Inline space="small" align="right">
              <Placeholder width={60} height={50} />
              <Placeholder width={80} height={50} />
              <Placeholder width={60} height={50} label="right" />
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Collapsing across breakpoints',
      description: (
        <>
          <Text>
            Inlines can be collapsed into a single vertical stack responsively
            using the <Strong>collapseBelow</Strong> prop and specifying the
            name of the breakpoint, e.g.{' '}
            <Strong>collapseBelow=&ldquo;tablet&rdquo;</Strong>.
          </Text>
          <Text>
            The following results in three inline elements from the{' '}
            <Strong>tablet</Strong> breakpoint upwards, and collapses into a
            vertical stack on <Strong>mobile</Strong>.
          </Text>
        </>
      ),
      Example: () => {
        const { value: visual } = source(
          <Tiles space="xlarge" columns={[1, 2]}>
            <Stack space="small">
              <Text tone="secondary" size="small">
                On “tablet” and above
              </Text>
              <Inline space="small">
                <Placeholder width={48} height={48} />
                <Placeholder width={48} height={48} />
                <Placeholder width={48} height={48} />
              </Inline>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Stack space="small">
                <Placeholder height={48} />
                <Placeholder height={48} />
                <Placeholder height={48} />
              </Stack>
            </Stack>
          </Tiles>,
        );

        const { code: codeDemo } = source(
          <Inline space="small" collapseBelow="tablet">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Reversing the order',
      description: (
        <>
          <Text>
            By default, Inline renders its content in document order, which also
            doubles as the screen reader order. The visual order can be flipped
            using the <Strong>reverse</Strong> prop.
          </Text>
          <Text>
            This is useful when navigating forward within a flow, where the
            primary action is on the right when inline, and on top when
            collapsed. For this reason, the default horizontal alignment when
            reversed is to the <Strong>right</Strong>.
          </Text>
          <Notice>
            <Text>
              Reverse is only applied in combination with the{' '}
              <Strong>collapseBelow</Strong> prop to ensure the content is
              reversed on the same row, but follows the document order when
              collapsed.
            </Text>
          </Notice>
        </>
      ),
      Example: () => {
        const { value: visual } = source(
          <Tiles space="xlarge" columns={[1, 2]}>
            <Stack space="small">
              <Text tone="secondary" size="small">
                On “tablet” and above
              </Text>
              <Inline space="small" align="right">
                <Placeholder height={48} label="Second" />
                <Placeholder height={48} label="First" />
              </Inline>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Stack space="small">
                <Placeholder height={48} label="First" />
                <Placeholder height={48} label="Second" />
              </Stack>
            </Stack>
          </Tiles>,
        );

        const { code: codeDemo } = source(
          <Inline space="small" collapseBelow="tablet" reverse>
            <Placeholder height={48} label="First" />
            <Placeholder height={48} label="Second" />
          </Inline>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Semantic elements',
      description: (
        <Text>
          By default, Inline renders a <Strong>div</Strong> element. You can
          customise this via the <Strong>component</Strong> prop.
        </Text>
      ),
      code: source(
        <Inline component="span" space="small">
          <Placeholder width={40} height={40} />
          <Placeholder width={40} height={40} />
        </Inline>,
      ).code,
    },
    dataAttributeDocs({
      code: `
        <Inline
          data={{ testid: 'inline-1' }}
          // => data-testid="inline-1"
        >
          ...
        </Inline>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
