import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Text, HiddenVisually } from '../';

const meta = {
  title: 'Components/HiddenVisually',
  component: HiddenVisually,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile'],
      wireframeOnly: true,
    }),
  },
} satisfies Meta<typeof HiddenVisually>;

export default meta;
type Story = StoryObj<typeof HiddenVisually>;

export const InsideText: Story = {
  render: () => (
    <Text>
      The next sentence is only available to screen readers.
      <HiddenVisually> Hello world.</HiddenVisually>
    </Text>
  ),
};
