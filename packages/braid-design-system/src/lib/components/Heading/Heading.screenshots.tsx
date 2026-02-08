import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';
import { Fragment } from 'react';

import { Box, Heading, IconPositive, IconImage, Stack, Text } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { textAlignments } from '../../utils/docsHelpers';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

// Heading levels for use in examples
const headingLevels = ['1', '2', '3', '4'] as const;

// Thai examples for different heading levels
const thaiLevels = {
  '1': 'เอบีซี',
  '2': 'เอบีซี',
  '3': 'เอบีซี',
  '4': 'เอบีซี',
};

export const Levels: Story = {
  render: () => (
    <Stack space="large">
      {headingLevels.map((level) => (
        <Heading level={level} key={level}>
          Level {level} - {thaiLevels[level]}
        </Heading>
      ))}
    </Stack>
  ),
};

export const LineHeights: Story = {
  name: 'Line heights',
  render: () => (
    <Stack space="medium">
      {headingLevels.map((level) => (
        <Box key={level} background="neutralLight">
          <Heading level={level}>
            Level {level} - {thaiLevels[level]} (Line 1)
            <br />
            Level {level} - {thaiLevels[level]} (Line 2)
          </Heading>
        </Box>
      ))}
    </Stack>
  ),
};

export const WeakWeight: Story = {
  name: 'Weight: weak',
  render: () => (
    <Stack space="large">
      {headingLevels.map((level) => (
        <Heading level={level} weight="weak" key={level}>
          Level {level} - {thaiLevels[level]} Weak
        </Heading>
      ))}
    </Stack>
  ),
};

export const Alignment: Story = {
  name: 'Heading Alignment',
  render: () => (
    <Stack space="medium">
      {textAlignments.map((alignment) => (
        <Heading level="4" align={alignment} key={alignment}>
          {alignment}
        </Heading>
      ))}
    </Stack>
  ),
};

export const ResponsiveAlignment: Story = {
  name: 'Heading Alignment (responsive)',
  render: () => (
    <Heading level="4" align={['right', 'center', 'left']}>
      Right aligned mobile, center on tablet, left on desktop
    </Heading>
  ),
};

export const MaxLinesOne: Story = {
  name: 'Max lines = 1',
  render: () => (
    <Box style={{ width: 220 }}>
      <Box style={{ border: '1px solid red' }} />
      <Heading level="2" maxLines={1}>
        Limiting to 1 line that won’t fit in the layout
      </Heading>
      <Box style={{ border: '1px solid red' }} />
    </Box>
  ),
};

export const MaxLinesOneInFlex: Story = {
  name: 'Max lines = 1 (in flex container)',
  render: () => (
    <Box display="flex" flexDirection="column" style={{ width: 220 }}>
      <Box style={{ border: '1px solid red' }} />
      <Heading level="2" maxLines={1}>
        Limiting to 1 line that won’t fit in the layout
      </Heading>
      <Box style={{ border: '1px solid red' }} />
    </Box>
  ),
};

export const MaxLinesThree: Story = {
  name: 'Max lines = 3',
  render: () => (
    <Box style={{ width: 220 }}>
      <Box style={{ border: '1px solid red' }} />
      <Heading level="2" maxLines={3}>
        Another example of long text, but limiting to 3 lines, and won’t fit in
        the layout.
      </Heading>
      <Box style={{ border: '1px solid red' }} />
    </Box>
  ),
};

export const WithIcon: Story = {
  name: 'With an icon',
  render: () => (
    <Stack space="large">
      {headingLevels.map((level) => (
        <Box key={level} background="neutralLight">
          <Heading level={level} icon={<IconImage />}>
            Level {level} with icon
          </Heading>
        </Box>
      ))}
    </Stack>
  ),
};

export const AlignmentWithIcon: Story = {
  name: 'Alignment with an icon',
  render: () => (
    <Stack space="large">
      {textAlignments.map((alignment) => (
        <Heading
          level="3"
          align={alignment}
          icon={<IconImage />}
          key={alignment}
        >
          {alignment}
        </Heading>
      ))}
    </Stack>
  ),
};

export const ResponsiveAlignmentWithIcon: Story = {
  name: 'Responsive alignment with an icon',
  render: () => (
    <Stack space="medium">
      <Heading
        level="3"
        align={['right', 'center', 'left']}
        icon={<IconImage />}
      >
        Right aligned mobile, center on tablet, left on desktop
      </Heading>
    </Stack>
  ),
};

export const IconLineHeight: Story = {
  name: 'Icon should not impact line height (Red line should not step)',
  render: () => (
    <Stack space="large">
      <Text tone="secondary">Format: Icon only, Text only, Text with icon</Text>
      {headingLevels.map((level) => (
        <Fragment key={level}>
          <Box display="flex">
            <Heading level={level}>
              <IconImage />
              <Box style={{ border: '1px solid red' }} />
            </Heading>
            <Heading level={level}>
              , Abc
              <Box style={{ border: '1px solid red' }} />
            </Heading>
            <Heading level={level}>
              , Abc
              <IconImage />
              <Box style={{ border: '1px solid red' }} />
            </Heading>
          </Box>
          <Box display="flex">
            <Heading level={level}>
              <IconImage />
              <Box style={{ border: '1px solid red' }} />
            </Heading>
            <Heading level={level}>
              , เอบีซี
              <Box style={{ border: '1px solid red' }} />
            </Heading>
            <Heading level={level}>
              , เอบีซี
              <IconImage />
              <Box style={{ border: '1px solid red' }} />
            </Heading>
          </Box>
        </Fragment>
      ))}
    </Stack>
  ),
};

export const ContrastTest: Story = {
  name: 'Contrast',
  render: () => (
    <BackgroundContrastTest>
      {(background) => (
        <Heading level="4">
          {background} <IconPositive />
        </Heading>
      )}
    </BackgroundContrastTest>
  ),
};
