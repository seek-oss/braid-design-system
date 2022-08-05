import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Stack, Hidden, Text, TextLink, Strong } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  Example: () =>
    source(
      <Stack space="large">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
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
        <Text>
          Items can be aligned horizontally using the <Strong>align</Strong>{' '}
          prop. Responsive values are supported, e.g.{' '}
          <Strong>{"align={{ mobile: 'center', tablet: 'left' }}"}</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium" dividers>
            <Stack space="gutter" align="left">
              <Placeholder width={60} height={40} label="left" />
              <Placeholder width={80} height={40} />
              <Placeholder width={60} height={40} />
            </Stack>
            <Stack space="gutter" align="center">
              <Placeholder width={60} height={40} />
              <Placeholder width={80} height={40} label="center" />
              <Placeholder width={60} height={40} />
            </Stack>
            <Stack space="gutter" align="right">
              <Placeholder width={60} height={40} />
              <Placeholder width={80} height={40} />
              <Placeholder width={60} height={40} label="right" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Dividers',
      description: (
        <Text>
          Dividers can be placed between each item using the{' '}
          <Strong>dividers</Strong> prop. Supports both <Strong>regular</Strong>{' '}
          and <Strong>strong</Strong> variants
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="xxlarge">
            <Stack space="medium" dividers>
              <Placeholder height={30} />
              <Placeholder height={30} label="regular" />
              <Placeholder height={30} />
            </Stack>
            <Stack space="medium" dividers="strong">
              <Placeholder height={30} />
              <Placeholder height={30} label="strong" />
              <Placeholder height={30} />
            </Stack>
          </Stack>,
        ),
    },

    {
      label: 'Responsively hiding stack items',
      description: (
        <Text>
          The <TextLink href="/components/Hidden">Hidden</TextLink> component
          can be used to responsively hide specific items.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Placeholder height={40} label="1" />
            <Hidden below="tablet">
              <Placeholder height={40} label="2" />
            </Hidden>
            <Hidden above="mobile">
              <Placeholder height={40} label="3" />
            </Hidden>
            <Placeholder height={40} label="4" />
          </Stack>,
        ),
    },
  ],
};

export default docs;
