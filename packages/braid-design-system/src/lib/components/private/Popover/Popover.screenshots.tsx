import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useRef } from 'react';

import { setChromatic } from 'braid-storybook/chromatic';

import { Box } from '../..';
import { Placeholder } from '../../../playroom/components';

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
    chromatic: setChromatic({
      viewports: ['mobile'],
      wireframeOnly: true,
    }),
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

      const isHorizontalPlacement =
        args.placement === 'left' || args.placement === 'right';

      return (
        <Box
          display="flex"
          justifyContent={parameters.justifyContent}
          alignItems={isHorizontalPlacement ? 'center' : undefined}
          style={{
            paddingTop:
              args.placement === 'top' || isHorizontalPlacement
                ? POPOVER_HEIGHT * 1.5
                : undefined,
            paddingBottom:
              args.placement === 'bottom' || isHorizontalPlacement
                ? POPOVER_HEIGHT * 1.5
                : undefined,
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

export const BottomPlacementStartAligned: Story = {
  name: 'Bottom placement, start aligned',
  args: {
    placement: 'bottom',
    align: 'start',
  },
};

export const BottomPlacementCenterAligned: Story = {
  name: 'Bottom placement, center aligned',
  args: {
    placement: 'bottom',
    align: 'center',
  },
};

export const BottomPlacementEndAligned: Story = {
  name: 'Bottom placement, end aligned',
  args: {
    placement: 'bottom',
    align: 'end',
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

export const TopPlacementStartAligned: Story = {
  name: 'Top placement, start aligned',
  args: {
    placement: 'top',
    align: 'start',
  },
};

export const TopPlacementCenterAligned: Story = {
  name: 'Top placement, center aligned',
  args: {
    placement: 'top',
    align: 'center',
  },
};

export const TopPlacementEndAligned: Story = {
  name: 'Top placement, end aligned',
  args: {
    placement: 'top',
    align: 'end',
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

export const LeftPlacementStartAligned: Story = {
  name: 'Left placement, start aligned',
  args: {
    placement: 'left',
    align: 'start',
  },
};

export const LeftPlacementCenterAligned: Story = {
  name: 'Left placement, center aligned',
  args: {
    placement: 'left',
    align: 'center',
  },
};

export const LeftPlacementEndAligned: Story = {
  name: 'Left placement, end aligned',
  args: {
    placement: 'left',
    align: 'end',
  },
};

export const RightPlacementStartAligned: Story = {
  name: 'Right placement, start aligned',
  args: {
    placement: 'right',
    align: 'start',
  },
};

export const RightPlacementCenterAligned: Story = {
  name: 'Right placement, center aligned',
  args: {
    placement: 'right',
    align: 'center',
  },
};

export const RightPlacementEndAligned: Story = {
  name: 'Right placement, end aligned',
  args: {
    placement: 'right',
    align: 'end',
  },
};

export const EndAlignedAtStartEdge: Story = {
  name: 'End aligned at start edge',
  parameters: {
    justifyContent: 'flexStart',
  },
  args: {
    align: 'end',
  },
};

export const StartAlignedAtEndEdge: Story = {
  name: 'Start aligned at end edge',
  parameters: {
    justifyContent: 'flexEnd',
  },
  args: {
    align: 'start',
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
