import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { makeBraidModes } from 'braid-storybook/modes';

import { Text, HiddenVisually } from '../';

const meta = {
  title: 'Components/HiddenVisually',
  component: HiddenVisually,
  parameters: {
    chromatic: {
      modes: makeBraidModes({
        viewports: ['mobile'],
        themes: ['wireframe'],
      }),
    },
  },
} satisfies Meta<typeof HiddenVisually>;

export default meta;
type Story = StoryObj<typeof HiddenVisually>;

export const InsideText: Story = {
  name: 'Inside Text',
  render: () => (
    <Text>
      The next sentence is only available to screen readers.
      <HiddenVisually> Hello world.</HiddenVisually>
    </Text>
  ),
};
