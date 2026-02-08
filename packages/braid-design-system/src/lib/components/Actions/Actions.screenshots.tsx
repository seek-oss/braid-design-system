import type { StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Button, Actions, Stack } from '../';

type Story = StoryObj<typeof Actions>;

const meta = {
  title: 'Components/Actions',
  component: Actions,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
  args: {
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="transparent">Button 3</Button>
      </>
    ),
  },
};

export default meta;

export const StandardSize: Story = {};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};

export const InCenteredFlexContainer: Story = {
  decorators: [
    (Story) => (
      <Stack space="small" align="center">
        <Story />
      </Stack>
    ),
  ],
};
