import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, TextLinkButton, IconLink } from '../';

const meta: Meta<typeof TextLinkButton> = {
  title: 'Components/TextLinkButton',
  component: TextLinkButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof TextLinkButton>;

export const Default: Story = {
  args: {
    children: 'is actually a span with an ARIA role of button.',
  },
  decorators: (Story) => (
    <Text>
      The link in this sentence <Story />
    </Text>
  ),
};

export const WeightWeak: Story = {
  name: 'Weight weak',
  args: {
    weight: 'weak',
    children: 'is actually a span with an ARIA role of button.',
  },
  decorators: (Story) => (
    <Text>
      The link in this sentence <Story />.
    </Text>
  ),
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    icon: <IconLink />,
    children: 'TextLinkButton',
  },
  decorators: (Story) => (
    <Text>
      A sentence with a <Story />.
    </Text>
  ),
};

export const WithATrailingIcon: Story = {
  name: 'With a trailing icon',
  args: {
    icon: <IconLink />,
    iconPosition: 'trailing',
    children: 'TextLinkButton',
  },
  decorators: (Story) => (
    <Text>
      A sentence with an icon trailing the <Story />.
    </Text>
  ),
};

export const WithIconAndWeightWeak: Story = {
  name: 'With icon and weight weak',
  args: {
    icon: <IconLink />,
    weight: 'weak',
    children: 'TextLinkButton',
  },
  decorators: (Story) => (
    <Text>
      A sentence with a <Story />.
    </Text>
  ),
};

export const WithATrailingIconAndWeightWeak: Story = {
  name: 'With a trailing icon and weight weak',
  args: {
    icon: <IconLink />,
    iconPosition: 'trailing',
    weight: 'weak',
    children: 'TextLinkButton',
  },
  decorators: (Story) => (
    <Text>
      A sentence with an icon trailing the <Story />.
    </Text>
  ),
};
