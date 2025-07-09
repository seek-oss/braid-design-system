import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, TextLinkButton, IconLink } from '../';

const meta: Meta<typeof TextLinkButton> = {
  title: 'Components/TextLinkButton',
  component: TextLinkButton,
};

export default meta;
type Story = StoryObj<typeof TextLinkButton>;

export const Default: Story = {
  render: () => (
    <Text>
      The link in this sentence{' '}
      <TextLinkButton>
        is actually a span with an ARIA role of button.
      </TextLinkButton>
    </Text>
  ),
};

export const WeightWeak: Story = {
  name: 'Weight weak',
  render: () => (
    <Text>
      The link in this sentence{' '}
      <TextLinkButton weight="weak">
        is actually a span with an ARIA role of button
      </TextLinkButton>
      .
    </Text>
  ),
};

export const WithIcon: Story = {
  name: 'With icon',
  render: () => (
    <Text>
      A sentence with a{' '}
      <TextLinkButton icon={<IconLink />}>TextLinkButton</TextLinkButton>.
    </Text>
  ),
};

export const WithATrailingIcon: Story = {
  name: 'With a trailing icon',
  render: () => (
    <Text>
      A sentence with an icon trailing the{' '}
      <TextLinkButton icon={<IconLink />} iconPosition="trailing">
        TextLinkButton
      </TextLinkButton>
      .
    </Text>
  ),
};

export const WithIconAndWeightWeak: Story = {
  name: 'With icon and weight weak',
  render: () => (
    <Text>
      A sentence with a{' '}
      <TextLinkButton weight="weak" icon={<IconLink />}>
        TextLinkButton
      </TextLinkButton>
      .
    </Text>
  ),
};

export const WithATrailingIconAndWeightWeak: Story = {
  name: 'With a trailing icon and weight weak',
  render: () => (
    <Text>
      A sentence with an icon trailing the{' '}
      <TextLinkButton weight="weak" icon={<IconLink />} iconPosition="trailing">
        TextLinkButton
      </TextLinkButton>
      .
    </Text>
  ),
};
