import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, TextLinkButton, IconLink } from '../';

const meta: Meta<typeof TextLinkButton> = {
  title: 'Components/TextLinkButton',
  component: TextLinkButton,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
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
  parameters: {
     ,
  },
};

export const Weightweak: Story = {
  render: () => (
    <Text>
      The link in this sentence{' '}
      <TextLinkButton weight="weak">
        is actually a span with an ARIA role of button
      </TextLinkButton>
      .
    </Text>
  ),
  parameters: {
     ,
  },
};

export const Withicon: Story = {
  render: () => (
    <Text>
      A sentence with a{' '}
      <TextLinkButton icon={<IconLink />}>TextLinkButton</TextLinkButton>.
    </Text>
  ),
  parameters: {
     ,
  },
};

export const Withatrailingicon: Story = {
  render: () => (
    <Text>
      A sentence with an icon trailing the{' '}
      <TextLinkButton icon={<IconLink />} iconPosition="trailing">
        TextLinkButton
      </TextLinkButton>
      .
    </Text>
  ),
  parameters: {
     ,
  },
};

export const Withiconandweightweak: Story = {
  render: () => (
    <Text>
      A sentence with a{' '}
      <TextLinkButton weight="weak" icon={<IconLink />}>
        TextLinkButton
      </TextLinkButton>
      .
    </Text>
  ),
  parameters: {
     ,
  },
};

export const Withatrailingiconandweightweak: Story = {
  render: () => (
    <Text>
      A sentence with an icon trailing the{' '}
      <TextLinkButton weight="weak" icon={<IconLink />} iconPosition="trailing">
        TextLinkButton
      </TextLinkButton>
      .
    </Text>
  ),
  parameters: {
     ,
  },
};
