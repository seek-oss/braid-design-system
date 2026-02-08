import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Bleed, Box, Stack, Text } from '../';
import type { Space } from '../../css/atoms/atoms';

const spaceOptions: Space[] = [
  'none',
  'gutter',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
];
const spaceArg = {
  control: 'select',
  options: spaceOptions,
} as const;

const meta = {
  title: 'Components/Bleed',
  component: Bleed,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet', 'desktop', 'wide'],
      wireframeOnly: true,
    }),
  },
  argTypes: {
    space: spaceArg,
    horizontal: spaceArg,
    vertical: spaceArg,
    top: spaceArg,
    bottom: spaceArg,
    left: spaceArg,
    right: spaceArg,
    component: { control: 'text' },
  },
  args: {
    children: (
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        style={{ height: 150 }}
      />
    ),
  },
  decorators: (Story) => (
    <Box padding="xlarge" boxShadow="borderNeutral">
      <Box position="relative">
        <Story />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          boxShadow="borderNeutral"
        />
      </Box>
    </Box>
  ),
} satisfies Meta<typeof Bleed>;

export default meta;

type Story = StoryObj<typeof Bleed>;

export const OnAllSides: Story = {
  name: 'On all sides',
  args: {
    space: 'large',
  },
};

export const Horizontally: Story = {
  args: {
    horizontal: 'large',
  },
};

export const Vertically: Story = {
  args: {
    vertical: 'large',
  },
};

export const ToTheTop: Story = {
  name: 'To the top',
  args: {
    top: 'large',
  },
};

export const ToTheBottom: Story = {
  name: 'To the bottom',
  args: {
    bottom: 'large',
  },
};

export const ToTheLeft: Story = {
  name: 'To the left',
  args: {
    left: 'large',
  },
};

export const ToTheRight: Story = {
  name: 'To the right',
  args: {
    right: 'large',
  },
};

export const ResponsiveSingleDimension: Story = {
  name: 'Responsive single dimension',
  args: {
    top: {
      mobile: 'small',
      tablet: 'medium',
      desktop: 'large',
      wide: 'xlarge',
    },
    bottom: {
      mobile: 'xlarge',
      tablet: 'large',
      desktop: 'medium',
      wide: 'small',
    },
    left: {
      mobile: 'small',
      tablet: 'medium',
      desktop: 'large',
      wide: 'xlarge',
    },
    right: {
      mobile: 'xlarge',
      tablet: 'large',
      desktop: 'medium',
      wide: 'small',
    },
  },
};

export const ResponsiveOnAxis: Story = {
  name: 'Responsive on axis',
  args: {
    horizontal: {
      mobile: 'small',
      tablet: 'medium',
      desktop: 'large',
      wide: 'xlarge',
    },
    vertical: {
      mobile: 'xlarge',
      tablet: 'large',
      desktop: 'medium',
      wide: 'small',
    },
  },
};

export const ResponsiveSpace: Story = {
  name: 'Responsive space',
  args: {
    space: {
      mobile: 'small',
      tablet: 'medium',
      desktop: 'large',
      wide: 'xlarge',
    },
  },
};

export const TestLeftTrumpsHorizontalAndSpace: Story = {
  name: 'Test - left trumps horizontal and space',
  render: () => (
    <Bleed left="xlarge" horizontal="medium" space="xsmall">
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        paddingLeft="xxlarge"
        display="flex"
        alignItems="center"
        style={{ height: 150 }}
      >
        <Stack space="small">
          <Text>Left: xlarge</Text>
          <Text>Right: medium</Text>
          <Text>Top: xsmall</Text>
          <Text>Bottom: xsmall</Text>
        </Stack>
      </Box>
    </Bleed>
  ),
};

export const TestRightTrumpsHorizontalAndSpace: Story = {
  name: 'Test - right trumps horizontal and space',
  render: () => (
    <Bleed right="xlarge" horizontal="medium" space="xsmall">
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        paddingLeft="xlarge"
        display="flex"
        alignItems="center"
        style={{ height: 150 }}
      >
        <Stack space="small">
          <Text>Left: medium</Text>
          <Text>Right: xlarge</Text>
          <Text>Top: xsmall</Text>
          <Text>Bottom: xsmall</Text>
        </Stack>
      </Box>
    </Bleed>
  ),
};

export const TestHorizontalTrumpsSpace: Story = {
  name: 'Test - horizontal trumps space',
  render: () => (
    <Bleed horizontal="xlarge" space="xsmall">
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        paddingLeft="xxlarge"
        display="flex"
        alignItems="center"
        style={{ height: 150 }}
      >
        <Stack space="small">
          <Text>Left: xlarge</Text>
          <Text>Right: xlarge</Text>
          <Text>Top: xsmall</Text>
          <Text>Bottom: xsmall</Text>
        </Stack>
      </Box>
    </Bleed>
  ),
};

export const TestTopTrumpsVerticalAndSpace: Story = {
  name: 'Test - top trumps vertical and space',
  render: () => (
    <Bleed top="xlarge" vertical="medium" space="xsmall">
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        paddingLeft="large"
        display="flex"
        alignItems="center"
        style={{ height: 150 }}
      >
        <Stack space="small">
          <Text>Left: xsmall</Text>
          <Text>Right: xsmall</Text>
          <Text>Top: xlarge</Text>
          <Text>Bottom: medium</Text>
        </Stack>
      </Box>
    </Bleed>
  ),
};

export const TestBottomTrumpsVerticalAndSpace: Story = {
  name: 'Test - bottom trumps vertical and space',
  render: () => (
    <Bleed bottom="xlarge" vertical="medium" space="xsmall">
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        paddingLeft="large"
        display="flex"
        alignItems="center"
        style={{ height: 150 }}
      >
        <Stack space="small">
          <Text>Left: xsmall</Text>
          <Text>Right: xsmall</Text>
          <Text>Top: medium</Text>
          <Text>Bottom: xlarge</Text>
        </Stack>
      </Box>
    </Bleed>
  ),
};

export const TestVerticalTrumpsSpace: Story = {
  name: 'Test - vertical trumps space',
  render: () => (
    <Bleed vertical="xlarge" space="xsmall">
      <Box
        background="criticalLight"
        boxShadow="borderCritical"
        paddingLeft="large"
        display="flex"
        alignItems="center"
        style={{ height: 150 }}
      >
        <Stack space="small">
          <Text>Left: xsmall</Text>
          <Text>Right: xsmall</Text>
          <Text>Top: xlarge</Text>
          <Text>Bottom: xlarge</Text>
        </Stack>
      </Box>
    </Bleed>
  ),
};

export const TestContentShouldBeRelativeToBleedContainer: Story = {
  name: 'Test - Content should be relative to bleed container',
  render: () => (
    <Box padding="large" background="surface">
      <Bleed vertical="gutter">
        <Box
          background="criticalLight"
          boxShadow="borderCritical"
          style={{ height: 150 }}
        />
        <Box
          position="absolute"
          top={0}
          right={0}
          background="positive"
          style={{ height: 40, width: 40 }}
        />
      </Bleed>
    </Box>
  ),
};

export const TestSpan: Story = {
  name: 'Test - Span',
  args: {
    component: 'span',
    space: 'large',
  },
};
