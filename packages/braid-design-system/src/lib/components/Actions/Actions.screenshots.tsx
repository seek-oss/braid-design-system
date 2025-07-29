import type { StoryObj } from '@storybook/react-webpack5';

import { setChromatic } from 'braid-storybook/chromatic';

import { Button, Actions } from '../';

type Story = StoryObj<typeof Actions>;

const meta = {
  title: 'Components/Actions',
  component: Actions,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
};

export default meta;

export const StandardSize: Story = {
  name: 'Standard size',
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

export const SmallSize: Story = {
  name: 'Small size',
  args: {
    size: 'small',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="transparent">Button 3</Button>
      </>
    ),
  },
};
