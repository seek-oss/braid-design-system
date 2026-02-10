import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Box, ContentBlock } from '../';
import { Placeholder } from '../../playroom/components';

const meta = {
  title: 'Components/ContentBlock',
  component: ContentBlock,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'wide'] }),
  },
  argTypes: {
    width: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: 'Maximum width of the content block',
    },
    align: {
      control: 'radio',
      options: ['left', 'center'],
      description: 'Horizontal alignment of the content block',
    },
  },
  args: {
    width: 'medium',
    align: 'center',
    children: <Placeholder height={100} />,
  },
} satisfies Meta<typeof ContentBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultWidth: Story = {
  name: 'Default width',
  args: {
    children: <Placeholder height={100} />,
  },
};

export const XSmallWidth: Story = {
  name: 'Xsmall width',
  args: {
    width: 'xsmall',
    children: <Placeholder height={100} />,
  },
};

export const SmallWidth: Story = {
  name: 'Small width',
  args: {
    width: 'small',
    children: <Placeholder height={100} />,
  },
};

export const MediumWidth: Story = {
  name: 'Medium width',
  args: {
    width: 'medium',
    children: <Placeholder height={100} />,
  },
};

export const LargeWidth: Story = {
  name: 'Large width',
  args: {
    width: 'large',
    children: <Placeholder height={100} />,
  },
};

export const AlignLeft: Story = {
  name: 'Align left',
  args: {
    width: 'xsmall',
    align: 'left',
    children: <Placeholder height={100} />,
  },
};

export const InsideFlexContainer: Story = {
  name: 'Inside flex container',
  args: {
    width: 'xsmall',
    children: <Placeholder height={100} />,
  },
  decorators: (Story) => (
    <Box display="flex">
      <Story />
    </Box>
  ),
};
