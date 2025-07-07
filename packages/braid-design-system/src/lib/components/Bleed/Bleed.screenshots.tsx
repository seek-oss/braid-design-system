import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { Bleed, Box, Stack, Text } from '../';

const BleedBox = () => (
  <Box
    background="criticalLight"
    boxShadow="borderCritical"
    style={{ height: 150 }}
  />
);

const meta = {
  title: 'Components/Bleed',
  component: Bleed,
  parameters: {
    // screenshotOnlyInWireframe: true,
    chromatic: {
      modes: makeBraidModes({
        viewports: ['xsmall', 'small', 'medium', 'large'],
        themes: ['wireframe'],
      }),
    },
  },
  argTypes: {
    space: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    horizontal: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    vertical: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    top: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    bottom: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    left: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    right: {
      control: 'select',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'none',
        'gutter',
      ],
    },
    component: { control: 'text' },
  },
  args: {
    children: <BleedBox />,
  },
} satisfies Meta<typeof Bleed>;

export default meta;

type Story = StoryObj<typeof Bleed>;

export const Onallsides: Story = {
  name: 'On all sides',
  args: {
    space: 'large',
  },
};

export const Horizontally: Story = {
  name: 'Horizontally',
  args: {
    horizontal: 'large',
  },
};

export const Vertically: Story = {
  name: 'Vertically',
  args: {
    vertical: 'large',
  },
};

export const Tothetop: Story = {
  name: 'To the top',
  args: {
    top: 'large',
  },
};

export const Tothebottom: Story = {
  name: 'To the bottom',
  args: {
    bottom: 'large',
  },
};

export const Totheleft: Story = {
  name: 'To the left',
  args: {
    left: 'large',
  },
};

export const Totheright: Story = {
  name: 'To the right',
  args: {
    right: 'large',
  },
};

export const Responsivesingledimension: Story = {
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

export const Responsiveonaxis: Story = {
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

export const Responsivespace: Story = {
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

export const Testlefttrumpshorizontalandspace: Story = {
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

export const Testrighttrumpshorizontalandspace: Story = {
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

export const Testhorizontaltrumpsspace: Story = {
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

export const Testtoptrumpsverticalandspace: Story = {
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

export const Testbottomtrumpsverticalandspace: Story = {
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

export const Testverticaltrumpsspace: Story = {
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

export const TestContentshouldberelativetobleedcontainer: Story = {
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
