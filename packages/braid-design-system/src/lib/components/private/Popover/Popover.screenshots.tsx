import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ComponentProps, useRef } from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { Box } from '../..';
import { Placeholder } from '../Placeholder/Placeholder';

import { Popover } from './Popover';

const TRIGGER_HEIGHT = 44;
const TRIGGER_WIDTH = 150;

const POPOVER_WIDTH = 200;
const POPOVER_HEIGHT = 88;

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    justifyContent: 'center',
    chromatic: {
      modes: makeBraidModes({
        viewports: ['mobile'],
        themes: ['wireframe'],
      }),
    },
  },
  args: {
    open: true,
    lockPlacement: true,
    role: false,
    placement: 'bottom',
    children: (
      <Placeholder
        label="Popover"
        height={POPOVER_HEIGHT}
        width={POPOVER_WIDTH}
      />
    ),
  },
  decorators: [
    (Story, { args, parameters }) => {
      const triggerRef = useRef<HTMLButtonElement>(null);

      return (
        <Box
          display="flex"
          justifyContent={parameters.justifyContent}
          style={{
            [args.placement === 'top' ? 'paddingTop' : 'paddingBottom']:
              POPOVER_HEIGHT * 1.5,
          }}
        >
          <Box ref={triggerRef}>
            <Placeholder
              label="Trigger"
              height={TRIGGER_HEIGHT}
              width={TRIGGER_WIDTH}
            />
          </Box>
          <Story args={{ ...args, triggerRef }} />
        </Box>
      );
    },
  ],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;

export const BottomPlacementLeftAligned: Story = {
  name: 'Bottom placement, left aligned',
  args: {
    placement: 'bottom',
    align: 'left',
  },
};

export const BottomPlacementCenterAligned: Story = {
  name: 'Bottom placement, center aligned',
  args: {
    placement: 'bottom',
    align: 'center',
  },
};

export const BottomPlacementRightAligned: Story = {
  name: 'Bottom placement, right aligned',
  args: {
    placement: 'bottom',
    align: 'right',
  },
};

export const BottomPlacementWithSmallOffset: Story = {
  name: 'Bottom placement with small offset',
  args: {
    placement: 'bottom',
    offsetSpace: 'small',
  },
};

export const BottomPlacementWithMediumOffset: Story = {
  name: 'Bottom placement with medium offset',
  args: {
    placement: 'bottom',
    offsetSpace: 'medium',
  },
};
export const BottomPlacementWithLargeOffset: Story = {
  name: 'Bottom placement with large offset',
  args: {
    placement: 'bottom',
    offsetSpace: 'large',
  },
};

export const TopPlacementLeftAligned: Story = {
  name: 'Top placement, left aligned',
  args: {
    placement: 'top',
    align: 'left',
  },
};

export const TopPlacementCenterAligned: Story = {
  name: 'Top placement, center aligned',
  args: {
    placement: 'top',
    align: 'center',
  },
};

export const TopPlacementRightAligned: Story = {
  name: 'Top placement, right aligned',
  args: {
    placement: 'top',
    align: 'right',
  },
};

export const TopPlacementWithSmallOffset: Story = {
  name: 'Top placement with small offset',
  args: {
    placement: 'top',
    offsetSpace: 'small',
  },
};

export const TopPlacementWithMediumOffset: Story = {
  name: 'Top placement with medium offset',
  args: {
    placement: 'top',
    offsetSpace: 'medium',
  },
};

export const TopPlacementWithLargeOffset: Story = {
  name: 'Top placement with large offset',
  args: {
    placement: 'top',
    offsetSpace: 'large',
  },
};

export const RightAlignedAtLeftEdge: Story = {
  name: 'Right aligned at left edge',
  parameters: {
    justifyContent: 'flexStart',
  },
  args: {
    align: 'right',
  },
};

export const LeftAlignedAtRightEdge: Story = {
  name: 'Left aligned at right edge',
  parameters: {
    justifyContent: 'flexEnd',
  },
  args: {
    align: 'left',
  },
};

export const ContentWidth: Story = {
  name: 'Content width',
  args: {
    width: 'content',
    children: <Placeholder label="Popover" height={POPOVER_HEIGHT} />,
  },
};

export const FullWidth: Story = {
  name: 'Full width',
  args: {
    width: 'full',
    children: <Placeholder label="Popover" height={POPOVER_HEIGHT} />,
  },
};
