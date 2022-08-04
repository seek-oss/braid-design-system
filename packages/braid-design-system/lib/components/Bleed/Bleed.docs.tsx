import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Bleed, Stack, Text, Strong, TextLink, Tiles } from '../';
import { Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Box padding="large" background="surface">
        <Stack space="medium">
          <Placeholder height={40} />
          <Bleed horizontal="large">
            <Box boxShadow="borderPromoteLight" background="promoteLight">
              <Placeholder height={40} />
            </Box>
          </Bleed>
          <Placeholder height={40} />
        </Stack>
      </Box>,
    ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <>
          <Text>
            Applies a negative margin to allow the content to bleed out into a
            the surrounding layout. As such it is important to ensure that size
            and direction of the bleed is accommodated by the parent layout.
          </Text>
          <Text>
            All bleed directions accept values from the{' '}
            <TextLink href="/foundations/layout#spacing">space scale</TextLink>,
            including support for responsive values, e.g.{' '}
            <Strong>{`vertical={{ mobile: 'small', tablet: 'medium', desktop: 'large', wide: 'xlarge' }}`}</Strong>
          </Text>
          <Text>
            Multiple bleed values can be applied to achieve the desired result,
            much like{' '}
            <TextLink href="/components/Box#padding-and-margins">
              paddings and margins
            </TextLink>
            , with the{' '}
            <TextLink href="#specific-direction">specific direction</TextLink>{' '}
            overriding the individual axis, which overrides the{' '}
            <Strong>space</Strong> prop.
          </Text>
        </>
      ),
    },
    {
      label: 'Vertical',
      description: (
        <Text>
          Contents will bleed into the surrounding layout vertically using the{' '}
          <Strong>vertical</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box
            padding="large"
            boxShadow="borderNeutralLight"
            background="surface"
          >
            <Bleed vertical="large">
              <Placeholder height={100} />
            </Bleed>
          </Box>,
        ),
    },
    {
      label: 'Horizontal',
      description: (
        <Text>
          Contents will bleed into the surrounding layout horizontally using the{' '}
          <Strong>horizontal</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box
            padding="large"
            boxShadow="borderNeutralLight"
            background="surface"
          >
            <Bleed horizontal="large">
              <Placeholder height={100} />
            </Bleed>
          </Box>,
        ),
    },
    {
      label: 'Specific direction',
      description: (
        <Text>
          Contents will bleed into the surrounding layout in a specified
          direction using the <Strong>top</Strong>, <Strong>bottom</Strong>,{' '}
          <Strong>left</Strong>, or <Strong>right</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles columns={2} space="gutter">
            <Box
              padding="large"
              boxShadow="borderNeutralLight"
              background="surface"
            >
              <Bleed top="large">
                <Placeholder height={80} label="top" />
              </Bleed>
            </Box>
            <Box
              padding="large"
              boxShadow="borderNeutralLight"
              background="surface"
            >
              <Bleed bottom="large">
                <Placeholder height={80} label="bottom" />
              </Bleed>
            </Box>
            <Box
              padding="large"
              boxShadow="borderNeutralLight"
              background="surface"
            >
              <Bleed left="large">
                <Placeholder height={80} label="left" />
              </Bleed>
            </Box>
            <Box
              padding="large"
              boxShadow="borderNeutralLight"
              background="surface"
            >
              <Bleed right="large">
                <Placeholder height={80} label="right" />
              </Bleed>
            </Box>
          </Tiles>,
        ),
    },
    {
      label: 'All directions',
      description: (
        <Text>
          Contents will bleed into the surrounding layout in all directions
          using the <Strong>space</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Box
            padding="large"
            boxShadow="borderNeutralLight"
            background="surface"
          >
            <Bleed space="large">
              <Placeholder height={100} />
            </Bleed>
          </Box>,
        ),
    },
  ],
};

export default docs;
