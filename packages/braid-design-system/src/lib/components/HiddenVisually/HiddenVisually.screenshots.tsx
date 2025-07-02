import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, HiddenVisually } from '../';

const meta = {
  title: 'Components/HiddenVisually',
  component: HiddenVisually,
  parameters: {
    screenshotOnlyInWireframe: true,
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
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
