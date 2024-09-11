import React, { Fragment, type ReactNode } from 'react';
import { titleCase } from 'title-case';
import type { ComponentScreenshot } from 'site/types';
import {
  Box,
  Text,
  Stack,
  Column,
  Columns,
  IconPositive,
  IconImage,
} from '../';
import { textSizeUntrimmed, fontWeight } from '../../css/typography.css';
import { textAlignments } from '../../utils/docsHelpers';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const textSizes = Object.keys(textSizeUntrimmed) as Array<
  keyof typeof textSizeUntrimmed
>;
const textWeights = Object.keys(fontWeight) as Array<keyof typeof fontWeight>;

const thaiSizes: Record<(typeof textSizes)[number], string> = {
  xsmall: 'เล็กพิเศษ',
  small: 'เล็ก',
  standard: 'ฐาน',
  large: 'ใหญ่',
};

const thaiWeights: Record<(typeof textWeights)[number], string> = {
  regular: 'ประจำ',
  medium: 'มัธยม',
  strong: 'มั่นคง',
};

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Sizes',
      Example: () => (
        <Stack space="medium">
          {textSizes.map((size) => (
            <Text size={size} key={size}>
              {titleCase(size)} - {thaiSizes[size]}
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
                {titleCase(size)} - {thaiSizes[size]} (Line 1)
                <br />
                {titleCase(size)} - {thaiSizes[size]} (Line 2)
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
          {textWeights.map((weight) => (
            <Text weight={weight as keyof typeof fontWeight} key={weight}>
              {titleCase(weight)} - {thaiWeights[weight]}
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
      label: 'Truncation (legacy)',
      Example: () => (
        <Box style={{ width: 215 }}>
          <Text truncate>
            Text limited to 1 line that won’t fit in the layout
          </Text>
        </Box>
      ),
    },
    {
      label: 'Max lines = 1 (should be same as truncation)',
      Example: () => (
        <Box style={{ width: 215 }}>
          <Text maxLines={1}>
            Text limited to 1 line that won’t fit in the layout
          </Text>
        </Box>
      ),
    },
    {
      label: 'Max lines = 3',
      Example: () => (
        <Box style={{ width: 215 }}>
          <Text maxLines={3}>
            Another example of really long text, but limited to 3 lines, and
            won’t fit in the layout.
          </Text>
        </Box>
      ),
    },
    {
      label: 'With an icon',
      background: 'surface',
      Example: () => (
        <Stack space="large">
          {textSizes.map((size) => (
            <Box key={size} background="neutralLight">
              <Text size={size} icon={<IconImage />}>
                {titleCase(size)} with icon
              </Text>
            </Box>
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
            <Text align={alignment} key={alignment} icon={<IconImage />}>
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
          <Text align={['right', 'center', 'left']} icon={<IconImage />}>
            Right aligned mobile, center on tablet, left on desktop
          </Text>
        </Stack>
      ),
    },

    {
      label: 'Icon should not impact line height (Red line should not step)',
      Example: () => (
        <Stack space="large">
          <Text tone="secondary">
            Format: Icon only, Text only, Text with icon
          </Text>
          {textSizes.map((size) => (
            <Fragment key={size}>
              <Box display="flex">
                <Text size={size}>
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Text>
                <Text size={size}>
                  , Abc
                  <Box style={{ border: '1px solid red' }} />
                </Text>
                <Text size={size}>
                  , Abc
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Text>
              </Box>
              <Box display="flex">
                <Text size={size}>
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Text>
                <Text size={size}>
                  , เอบีซี
                  <Box style={{ border: '1px solid red' }} />
                </Text>
                <Text size={size}>
                  , เอบีซี
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Text>
              </Box>
            </Fragment>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => (
        <BackgroundContrastTest>
          {(background) => (
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
          )}
        </BackgroundContrastTest>
      ),
    },
  ],
};
