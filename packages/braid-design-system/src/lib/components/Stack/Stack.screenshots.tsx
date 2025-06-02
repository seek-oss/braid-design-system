import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { Box, Stack, Hidden, Heading, Text, Strong } from '../';
import { spaces } from '../../utils/docsHelpers';
import { Placeholder } from '../private/Placeholder/Placeholder';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    screenshotOnlyInWireframe: true,
  },
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: '300px' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof Stack>;

// Create a story for each space value
const spaceStories = spaces.reduce(
  (acc, space) => {
    acc[`Space${space.charAt(0).toUpperCase() + space.slice(1)}`] = {
      name: `Space: ${space}`,
      args: {
        space,
        children: [
          <Placeholder key="1" height={40} />,
          <Placeholder key="2" height={40} />,
          <Placeholder key="3" height={40} />,
        ],
      },
      parameters: {
        chromatic: {
          viewports: [320, 768, 992, 1200],
        },
        layout: 'fullscreen',
      },
    };
    return acc;
  },
  {} as Record<string, Story>,
);

export const SpaceXxsmall = spaceStories.SpaceXxsmall;
export const SpaceXsmall = spaceStories.SpaceXsmall;
export const SpaceSmall = spaceStories.SpaceSmall;
export const SpaceMedium = spaceStories.SpaceMedium;
export const SpaceLarge = spaceStories.SpaceLarge;
export const SpaceXlarge = spaceStories.SpaceXlarge;
export const SpaceXxlarge = spaceStories.SpaceXxlarge;
export const SpaceGutter = spaceStories.SpaceGutter;

export const AlignToCenter: Story = {
  name: 'Align to center',
  args: {
    space: 'gutter',
    align: 'center',
    children: [
      <Placeholder key="1" height={40} width={40} />,
      <Placeholder key="2" height={40} width={60} />,
      <Placeholder key="3" height={40} width={80} />,
    ],
  },
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const AlignToRight: Story = {
  name: 'Align to right',
  args: {
    space: 'gutter',
    align: 'right',
    children: [
      <Placeholder key="1" height={40} width={40} />,
      <Placeholder key="2" height={40} width={60} />,
      <Placeholder key="3" height={40} width={80} />,
    ],
  },
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const ResponsiveAlignment: Story = {
  name: 'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
  args: {
    space: 'gutter',
    align: ['center', 'left'],
    children: [
      <Placeholder key="1" height={40} width={40} />,
      <Placeholder key="2" height={40} width={60} />,
      <Placeholder key="3" height={40} width={80} />,
    ],
  },
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const HandlesFragments: Story = {
  name: 'Test - Should handle fragments (6 placeholders should be evenly spaced)',
  render: () => (
    <Stack space="small">
      <Fragment>
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Fragment>
          <Placeholder height={40} />
          <Fragment>
            <Placeholder height={40} />
          </Fragment>
        </Fragment>
      </Fragment>
      <Placeholder height={40} />
      <Placeholder height={40} />
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const ResponsivelyHidingItems: Story = {
  name: 'Responsively hiding stack items',
  render: () => (
    <Stack space="gutter">
      <Placeholder height={40} label="1" />
      <Hidden below="tablet">
        <Placeholder height={40} label="2" />
      </Hidden>
      <Hidden above="mobile">
        <Placeholder height={40} label="3" />
      </Hidden>
      <Placeholder height={40} label="4" />
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const HiddenItemsWithResponsiveAlignment: Story = {
  name: 'Test - Hidden stack items with responsive alignment (should be center aligned showing 4 + 5 + 6 on mobile, right aligned showing 3 + 4 + 5 + 6 on tablet, left aligned showing 2 + 3 + 4 + 6 on desktop, left aligned showing 1 + 2 + 3 + 4 on wide)',
  render: () => (
    <Stack space="gutter" align={['center', 'right', 'left']}>
      <Hidden below="wide">
        <Placeholder width={40} height={40} label="1" />
      </Hidden>
      <Hidden below="desktop">
        <Placeholder width={40} height={40} label="2" />
      </Hidden>
      <Hidden below="tablet">
        <Placeholder width={40} height={40} label="3" />
      </Hidden>
      <Hidden print>
        <Placeholder width={40} height={40} label="4" />
      </Hidden>
      <Hidden above="tablet">
        <Placeholder width={40} height={40} label="5" />
      </Hidden>
      <Hidden above="desktop">
        <Placeholder width={40} height={40} label="6" />
      </Hidden>
      <Hidden screen>
        <Placeholder
          width={40}
          height={40}
          label="This should not be visible"
        />
      </Hidden>
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const SpanAlignToLeft: Story = {
  name: 'Test - Span align to left',
  args: {
    component: 'span',
    space: 'gutter',
    children: [
      <Placeholder key="1" height={40} />,
      <Placeholder key="2" height={40} />,
      <Placeholder key="3" height={40} />,
    ],
  },
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const SpanAlignToCenter: Story = {
  name: 'Test - Span align to center',
  args: {
    component: 'span',
    space: 'gutter',
    align: 'center',
    children: [
      <Placeholder key="1" height={40} width={40} />,
      <Placeholder key="2" height={40} width={60} />,
      <Placeholder key="3" height={40} width={80} />,
    ],
  },
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const SpanAlignToRight: Story = {
  name: 'Test - Span align to right',
  args: {
    component: 'span',
    space: 'gutter',
    align: 'right',
    children: [
      <Placeholder key="1" height={40} width={40} />,
      <Placeholder key="2" height={40} width={60} />,
      <Placeholder key="3" height={40} width={80} />,
    ],
  },
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const DefaultTextAlignmentLeft: Story = {
  name: 'Test - Default text alignment (left)',
  render: () => (
    <Stack space="large" align="left">
      <Heading level="3">Default heading alignment (left).</Heading>
      <Text>
        <Strong>Default text alignment (left).</Strong> Est quis incididunt do
        laboris eiusmod et..
      </Text>
      <Text align="right">
        <Strong>Explicit right alignment.</Strong> Pariatur ad aute esse esse
        sunt aliqua.
      </Text>
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const DefaultTextAlignmentCenter: Story = {
  name: 'Test - Default text alignment (center)',
  render: () => (
    <Stack space="large" align="center">
      <Heading level="3">Default heading alignment (center).</Heading>
      <Text>
        <Strong>Default text alignment (center).</Strong> Est quis incididunt do
        laboris eiusmod et..
      </Text>
      <Text align="right">
        <Strong>Explicit right alignment.</Strong> Pariatur ad aute esse esse
        sunt aliqua.
      </Text>
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};

export const DefaultTextAlignmentRight: Story = {
  name: 'Test - Default text alignment (right)',
  render: () => (
    <Stack space="large" align="right">
      <Heading level="3">Default heading alignment (right).</Heading>
      <Text>
        <Strong>Default text alignment (right).</Strong> Est quis incididunt do
        laboris eiusmod et..
      </Text>
      <Text align="center">
        <Strong>Explicit center alignment.</Strong> Pariatur ad aute esse esse
        sunt aliqua.
      </Text>
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 768, 992, 1200],
    },
    layout: 'fullscreen',
  },
};
