import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Box, PageBlock } from '../';
import { Placeholder } from '../../playroom/components';

const meta = {
  title: 'Components/PageBlock',
  component: PageBlock,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'wide'] }),
  },
  argTypes: {
    width: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Width of the content block',
    },
    component: {
      control: 'select',
      options: ['div', 'article', 'aside', 'main', 'section', 'nav'],
      description: 'HTML element to render the component as',
    },
    children: {
      description: 'Content to display within the page block',
    },
  },
  args: {
    width: 'large',
    component: 'div',
    children: <Placeholder height={100} />,
  },
} satisfies Meta<typeof PageBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    width: 'small',
  },
};

export const Medium: Story = {
  args: {
    width: 'medium',
  },
};

export const Large: Story = {
  args: {
    width: 'large',
  },
};

export const Full: Story = {
  args: {
    width: 'full',
  },
};

export const InsideFlexContainer: Story = {
  name: 'Inside flex container',
  args: {
    width: 'medium',
  },
  decorators: (Story) => (
    <Box display="flex">
      <Story />
    </Box>
  ),
};
