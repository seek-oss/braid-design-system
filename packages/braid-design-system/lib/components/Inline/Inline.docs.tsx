import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Inline, Stack, Strong, Text, TextLink } from '../';
import source from '../../utils/source.macro';

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
          <Stack space="medium" dividers align="center">
            <Inline space="small" alignY="top">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="top" />
              <Placeholder width={60} height={20} />
            </Inline>
            <Inline space="small" alignY="center">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="center" />
              <Placeholder width={60} height={20} />
            </Inline>
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
          <Stack space="medium" dividers>
            <Inline space="small" align="left">
              <Placeholder width={60} height={50} label="left" />
              <Placeholder width={80} height={50} />
              <Placeholder width={60} height={50} />
            </Inline>
            <Inline space="small" align="center">
              <Placeholder width={60} height={50} />
              <Placeholder width={80} height={50} label="center" />
              <Placeholder width={60} height={50} />
            </Inline>
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
        <Text>
          Items can be collapsed into a single vertical stack responsively using
          the <Strong>collapseBelow</Strong> prop. The following will collapse
          the list of items into a vertical stack below <Strong>tablet</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="small" collapseBelow="tablet">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>,
        ),
    },
  ],
};

export default docs;
