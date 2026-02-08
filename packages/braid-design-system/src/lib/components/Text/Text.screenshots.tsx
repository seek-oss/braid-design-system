import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';
import { Fragment } from 'react';
import { titleCase } from 'title-case';

import {
  Box,
  Text,
  Stack,
  Column,
  Columns,
  IconPositive,
  IconImage,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { textAlignments } from '../../utils/docsHelpers';

import { textSizeUntrimmed, fontWeight } from '../../css/typography.css';

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

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Sizes: Story = {
  render: () => (
    <Stack space="medium">
      {textSizes.map((size) => (
        <Text size={size} key={size}>
          {titleCase(size)} - {thaiSizes[size]}
        </Text>
      ))}
    </Stack>
  ),
};

export const LineHeights: Story = {
  name: 'Line heights',
  render: () => (
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
  parameters: {
    backgrounds: { default: 'surface' },
  },
};

export const Weights: Story = {
  render: () => (
    <Stack space="medium">
      {textWeights.map((weight) => (
        <Text weight={weight as keyof typeof fontWeight} key={weight}>
          {titleCase(weight)} - {thaiWeights[weight]}
        </Text>
      ))}
    </Stack>
  ),
};

export const TonesOnDarkBackground: Story = {
  name: 'Tones on dark background',
  render: () => (
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
  parameters: {
    backgrounds: { default: 'neutral' },
  },
};

export const Alignment: Story = {
  render: () => (
    <Container>
      <Stack space="medium">
        {textAlignments.map((alignment) => (
          <Text align={alignment} key={alignment}>
            {titleCase(alignment)}
          </Text>
        ))}
      </Stack>
    </Container>
  ),
};

export const AlignmentResponsive: Story = {
  name: 'Alignment (responsive)',
  render: () => (
    <Container>
      <Text align={['right', 'center', 'left']}>
        Right aligned mobile, center on tablet, left on desktop
      </Text>
    </Container>
  ),
};

export const MaxLines1: Story = {
  name: 'Max lines = 1',
  render: () => (
    <Box style={{ width: 215 }}>
      <Text maxLines={1}>
        Text limited to 1 line that won’t fit in the layout
      </Text>
    </Box>
  ),
};

export const MaxLines1InFlexContainer: Story = {
  name: 'Max lines = 1 (in flex container)',
  render: () => (
    <Box display="flex" style={{ width: 215 }}>
      <Text maxLines={1}>
        Text limited to 1 line that won’t fit in the layout
      </Text>
    </Box>
  ),
};

export const MaxLines2WithNonBreakingWord: Story = {
  name: 'Max lines = 2 (with non-breaking word)',
  render: () => (
    <Box style={{ width: 215 }}>
      <Text maxLines={2}>
        AnotherExampleOfReallyLongTextButLimitedTo2LinesAndWontFitInTheLayout
      </Text>
    </Box>
  ),
};

export const MaxLines3: Story = {
  name: 'Max lines = 3',
  render: () => (
    <Box style={{ width: 215 }}>
      <Text maxLines={3}>
        Another example of really long text, but limited to 3 lines, and won’t
        fit in the layout.
      </Text>
    </Box>
  ),
};

export const WithAnIcon: Story = {
  name: 'With an icon',
  render: () => (
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
  parameters: {
    backgrounds: { default: 'surface' },
  },
};

export const AlignmentWithAnIcon: Story = {
  name: 'Alignment with an icon',
  render: () => (
    <Container>
      <Stack space="medium">
        {textAlignments.map((alignment) => (
          <Text align={alignment} key={alignment} icon={<IconImage />}>
            {titleCase(alignment)}
          </Text>
        ))}
      </Stack>
    </Container>
  ),
};

export const ResponsiveAlignmentWithAnIcon: Story = {
  name: 'Responsive alignment with an icon',
  render: () => (
    <Stack space="medium">
      <Text align={['right', 'center', 'left']} icon={<IconImage />}>
        Right aligned mobile, center on tablet, left on desktop
      </Text>
    </Stack>
  ),
};

export const IconShouldNotImpactLineHeight: Story = {
  name: 'Icon should not impact line height (Red line should not step)',
  render: () => (
    <Stack space="large">
      <Text tone="secondary">Format: Icon only, Text only, Text with icon</Text>
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
};

export const Contrast: Story = {
  render: () => (
    <Container>
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
    </Container>
  ),
};
