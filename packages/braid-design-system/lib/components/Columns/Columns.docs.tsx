import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Columns, Column, Strong, Text, Stack } from '../';
import source from '../../utils/source.macro';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
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
  alternatives: [
    {
      name: 'Inline',
      description: 'For fine-grained control of spacing and alignment.',
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
          <Stack space="large" dividers>
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
          <Stack space="large" dividers>
            <Columns space="small" align="left">
              <Column width="1/5">
                <Placeholder height={20} label="left" />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
            </Columns>
            <Columns space="small" align="center">
              <Column width="1/5">
                <Placeholder height={20} />
              </Column>
              <Column width="1/5">
                <Placeholder height={20} label="center" />
              </Column>
            </Columns>
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
      label: 'Collapsing across breakpoints',
      description: (
        <Text>
          Columns can be collapsed into a single vertical stack responsively
          using the <Strong>collapseBelow</Strong> prop. The following results
          in three columns from the <Strong>tablet</Strong> breakpoint upwards,
          but collapse into a vertical stack on <Strong>mobile</Strong>.
        </Text>
      ),
      Example: () =>
        source(
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
        ),
    },
    {
      label: 'Reversing the column order',
      description: (
        <Text>
          By default, columns are rendered in document order, which also doubles
          as the screen reader order. If you need the columns to be visually
          reversed, you can provide the <Strong>reverse</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Columns space="small" reverse>
            <Column width="1/5">
              <Placeholder height={60} label="First" />
            </Column>
            <Column>
              <Placeholder height={60} label="Second" />
            </Column>
          </Columns>,
        ),
    },
  ],
};

export default docs;
