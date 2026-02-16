import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Columns,
  Column,
  Strong,
  Text,
  Stack,
  Tiles,
  Divider,
  Notice,
} from '../';
import { Placeholder } from '../../playroom/components';
import { TextLink } from '../TextLink/TextLink';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Layout',
  subComponents: ['Column'],
  Example: () =>
    source(
      <Columns space="none">
        <Column>
          <Placeholder height={60} />
        </Column>
        <Column>
          <Placeholder height={60} />
        </Column>
        <Column>
          <Placeholder height={60} />
        </Column>
      </Columns>,
    ),
  description: (
    <Text>
      The <Strong>Columns</Strong> component is used for laying out content
      horizontally, with fine-grained control of widths, spacing and alignment.
    </Text>
  ),
  alternatives: [
    {
      name: 'Inline',
      description: 'For laying out flowing content that is allowed to wrap.',
    },
    {
      name: 'Spread',
      description:
        'For justifying content with equally distributed space in between.',
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
            between columns can be adjusted using the <Strong>space</Strong>{' '}
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
          <Columns
            space={{
              mobile: 'small',
              tablet: 'medium',
              desktop: 'large',
              wide: 'xlarge',
            }}
          >
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={60} />
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Column widths',
      description: (
        <>
          <Text>
            All columns are of equal width by default, but you can also
            customise the width of each column individually.{' '}
            <Strong>Column</Strong> supports widths fractional widths down to{' '}
            <Strong>1/5</Strong>.
          </Text>
          <Text>
            If you want a column to be as small as possible, you can also set
            its <Strong>width</Strong> to <Strong>content</Strong> which ensures
            that it’s only as wide as the content within it.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Columns space="xsmall">
              <Column width="content">
                <Placeholder height={30} label="content" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/5">
                <Placeholder height={30} label="1/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/4">
                <Placeholder height={30} label="1/4" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/3">
                <Placeholder height={30} label="1/3" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="2/5">
                <Placeholder height={30} label="2/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="1/2">
                <Placeholder height={30} label="1/2" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="3/5">
                <Placeholder height={30} label="3/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="2/3">
                <Placeholder height={30} label="2/3" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="3/4">
                <Placeholder height={30} label="3/4" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
            <Columns space="xsmall">
              <Column width="4/5">
                <Placeholder height={30} label="4/5" />
              </Column>
              <Column>
                <Placeholder height={30} label="fluid" />
              </Column>
            </Columns>
          </Stack>,
        ),
    },
    {
      label: 'Vertical alignment',
      description: (
        <Text>
          Columns with content of varying height can be vertically aligned using
          the <Strong>alignY</Strong> prop. Responsive values are supported.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Columns space="small" alignY="top">
              <Column>
                <Placeholder height={20} />
              </Column>
              <Column>
                <Placeholder height={80} label="top" />
              </Column>
              <Column>
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" alignY="center">
              <Column>
                <Placeholder height={20} />
              </Column>
              <Column>
                <Placeholder height={80} label="center" />
              </Column>
              <Column>
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" alignY="bottom">
              <Column>
                <Placeholder height={20} />
              </Column>
              <Column>
                <Placeholder height={80} label="bottom" />
              </Column>
              <Column>
                <Placeholder height={20} />
              </Column>
            </Columns>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      description: (
        <Text>
          When the total width of all the columns is less than the width of the
          parent container, the columns can be aligned horizontally using the{' '}
          <Strong>align</Strong> prop. Responsive values are supported.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Columns space="small" align="left">
              <Column width="1/5">
                <Placeholder height={20} label="left" />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" align="center">
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} label="center" />
              </Column>
            </Columns>
            <Divider />
            <Columns space="small" align="right">
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} label="right" />
              </Column>
            </Columns>
          </Stack>,
        ),
    },
    {
      label: 'Column visibility',
      description: (
        <>
          <Text>
            Columns can be hidden responsively using the{' '}
            <Strong>hideBelow</Strong> and/or <Strong>hideAbove</Strong> prop,
            by specifying the name of the breakpoint, e.g.{' '}
            <Strong>hideBelow=&ldquo;tablet&rdquo;</Strong>.
          </Text>
          <Text>
            Consider the three column layout below, applying{' '}
            <Strong>hideBelow=&ldquo;tablet&rdquo;</Strong> to the second
            column. Three columns will be shown from the <Strong>tablet</Strong>{' '}
            breakpoint upwards, and the second column will be hidden on{' '}
            <Strong>mobile</Strong>.
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
              <Columns space="small">
                <Column>
                  <Placeholder height={60} label="One" />
                </Column>
                <Column>
                  <Placeholder height={60} label="Two" />
                </Column>
                <Column>
                  <Placeholder height={60} label="Three" />
                </Column>
              </Columns>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Columns space="small">
                <Column>
                  <Placeholder height={60} label="One" />
                </Column>
                <Column>
                  <Placeholder height={60} label="Three" />
                </Column>
              </Columns>
            </Stack>
          </Tiles>,
        );

        const { code: codeDemo } = source(
          <Columns space="small">
            <Column>
              <Placeholder height={60} label="One" />
            </Column>
            <Column hideBelow="tablet">
              <Placeholder height={60} label="Two" />
            </Column>
            <Column>
              <Placeholder height={60} label="Three" />
            </Column>
          </Columns>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Collapsing across breakpoints',
      description: (
        <>
          <Text>
            Columns can be collapsed into a single vertical stack responsively
            using the <Strong>collapseBelow</Strong> prop and specifying the
            name of the breakpoint, e.g.{' '}
            <Strong>collapseBelow=&ldquo;tablet&rdquo;</Strong>.
          </Text>
          <Text>
            The following results in three columns from the{' '}
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
              <Columns space="small">
                <Column>
                  <Placeholder height={60} />
                </Column>
                <Column>
                  <Placeholder height={60} />
                </Column>
                <Column>
                  <Placeholder height={60} />
                </Column>
              </Columns>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Stack space="small">
                <Placeholder height={60} />
                <Placeholder height={60} />
                <Placeholder height={60} />
              </Stack>
            </Stack>
          </Tiles>,
        );

        const { code: codeDemo } = source(
          <Columns space="small" collapseBelow="tablet">
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={60} />
            </Column>
            <Column>
              <Placeholder height={60} />
            </Column>
          </Columns>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Reversing the column order',
      description: (
        <>
          <Text>
            By default, Columns are rendered in document order, which also
            doubles as the screen reader order. If you need the columns to be
            visually reversed, you can provide the <Strong>reverse</Strong>{' '}
            prop.
          </Text>
          <Notice>
            <Text>
              Reverse is only applied in combination with the{' '}
              <Strong>collapseBelow</Strong> prop to ensure the columns are
              reversed on the same row, but follow the document order when
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
              <Columns space="small">
                <Column>
                  <Placeholder height={60} label="Second" />
                </Column>
                <Column width="1/4">
                  <Placeholder height={60} label="First" />
                </Column>
              </Columns>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Below “tablet”
              </Text>
              <Stack space="small">
                <Placeholder height={60} label="First" />
                <Placeholder height={60} label="Second" />
              </Stack>
            </Stack>
          </Tiles>,
        );

        const { code: codeDemo } = source(
          <Columns space="small" collapseBelow="tablet" reverse>
            <Column width="1/5">
              <Placeholder height={60} label="First" />
            </Column>
            <Column>
              <Placeholder height={60} label="Second" />
            </Column>
          </Columns>,
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
        <>
          <Text>
            By default, Columns and Column render a <Strong>div</Strong>{' '}
            element. You can customise this via the <Strong>component</Strong>{' '}
            prop.
          </Text>
          <Notice>
            <Text>
              Certain components on Columns will change the default element used
              by Column. E.g. <Strong>ol</Strong> and <Strong>ul</Strong> will
              use an <Strong>li</Strong>, and <Strong>span</Strong> will use a{' '}
              <Strong>span</Strong>. However the user provided{' '}
              <Strong>component</Strong> prop will take precedence.
            </Text>
          </Notice>
        </>
      ),
      code: source(
        <Columns space="small" component="span">
          <Column>
            <Placeholder height={40} />
          </Column>
          <Column>
            <Placeholder height={40} />
          </Column>
        </Columns>,
      ).code,
    },
    dataAttributeDocs({
      code: `
        <Columns
          data={{ testid: 'columns-1' }}
          // => data-testid="columns-1"
          >
          <Column
            data={{ testid: 'column-1' }}
            // => data-testid="column-1"
          >
            ...
          </Column>
        </Columns>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
