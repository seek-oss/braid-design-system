import React, { Fragment, ReactNode } from 'react';
import { titleCase } from 'title-case';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Text, Stack, Column, Columns, IconPositive } from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { textSizeUntrimmed, fontWeight } from '../../css/typography.css';
import { backgrounds, textAlignments } from '../../utils/docsHelpers';
import { IconPromote } from '../icons';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const textSizes = Object.keys(textSizeUntrimmed) as Array<
  keyof typeof textSizeUntrimmed
>;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Sizes',
      Example: () => (
        <Stack space="medium">
          {textSizes.map((size) => (
            <Text size={size} key={size}>
              {titleCase(size)}
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Line heights',
      background: 'surface',
      Example: () => (
        <Stack space="medium">
          {textSizes.map((size) => (
            <Box key={size} background="neutralLight">
              <Text size={size}>
                {titleCase(size)} Text (Line 1)
                <br />
                {titleCase(size)} Text (Line 2)
              </Text>
            </Box>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Weights',
      Example: () => (
        <Stack space="medium">
          {Object.keys(fontWeight).map((weight) => (
            <Text weight={weight as keyof typeof fontWeight} key={weight}>
              {titleCase(weight)}
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Tones on dark background',
      background: 'neutral',
      Example: () => (
        <Stack space="medium">
          <Text tone="neutral">Neutral text</Text>
          <Text tone="secondary">Secondary text</Text>
          <Text tone="critical">Critical text</Text>
          <Text tone="caution">Caution text</Text>
          <Text tone="positive">Positive text</Text>
          <Text tone="info">Info text</Text>
          <Text tone="promote">Promote text</Text>
          <Text tone="formAccent">FormAccent text</Text>
          <Text tone="brandAccent">BrandAccent text</Text>
        </Stack>
      ),
    },
    {
      label: 'Alignment',
      Container,
      Example: () => (
        <Stack space="medium">
          {textAlignments.map((alignment) => (
            <Text align={alignment} key={alignment}>
              {titleCase(alignment)}
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Alignment (responsive)',
      Container,
      Example: () => (
        <Text align={['right', 'center', 'left']}>
          Right aligned mobile, center on tablet, left on desktop
        </Text>
      ),
    },
    {
      label: 'Truncation',
      Example: () => (
        <Box style={{ width: 90 }}>
          <Text truncate>Long piece of text</Text>
        </Box>
      ),
    },
    {
      label: 'With an icon',
      Example: () => (
        <Stack space="large">
          {textSizes.map((size) => (
            <Text size={size} icon={<IconPromote />} key={size}>
              {titleCase(size)} with icon
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Alignment with an icon',
      Container,
      Example: () => (
        <Stack space="medium">
          {textAlignments.map((alignment) => (
            <Text align={alignment} key={alignment} icon={<IconPromote />}>
              {titleCase(alignment)}
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Responsive alignment with an icon',
      Example: () => (
        <Stack space="medium">
          <Text align={['right', 'center', 'left']} icon={<IconPromote />}>
            Right aligned mobile, center on tablet, left on desktop
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="xsmall">
              <Columns space="medium">
                <Column>
                  <Text size="small">
                    {background} <IconPositive />
                  </Text>
                </Column>
                <Column width="content">
                  <Text size="small" tone="secondary">
                    Secondary <IconPositive />
                  </Text>
                </Column>
              </Columns>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
