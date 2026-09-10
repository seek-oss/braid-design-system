import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Avatar, Inline, Stack, Text } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

import { validAvatarSizes } from './Avatar';

import { photoPlaceholderUrl as imageUrl } from './photoPlaceholder.css';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    name: 'Leia Organa',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  args: {
    name: 'Leia Organa',
  },
};

export const Empty: Story = {
  args: {
    name: '',
  },
};

export const InitialsSizes: Story = {
  name: 'Initials sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar name="Leia Organa" size={size} />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const EmptySizes: Story = {
  name: 'Empty sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar size={size} />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const PhotoSizes: Story = {
  name: 'Photo sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar name="Leia Organa" size={size} imageUrl={imageUrl} />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const PhotoErrorSizes: Story = {
  name: 'Photo error sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar
            name="Leia Organa"
            size={size}
            imageUrl="https://invalid-path/photo.jpg"
          />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
  play: async ({ canvasElement }) => {
    canvasElement.querySelectorAll('img').forEach((img) => {
      img.dispatchEvent(new Event('error'));
    });
  },
};

export const KeylineSizes: Story = {
  name: 'Keyline sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar name="Leia Organa" size={size} keyline />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const LoadingSizes: Story = {
  name: 'Loading sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar name="Leia Organa" size={size} loading />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const Contrast: Story = {
  name: 'Avatar contrast',
  decorators: (Story) => (
    <BackgroundContrastTest>
      <Story />
    </BackgroundContrastTest>
  ),
  render: () => (
    <Inline space="small" alignY="center">
      <Avatar name="Leia Organa" keyline />
      <Avatar keyline />
      <Avatar name="Leia Organa" loading keyline />
    </Inline>
  ),
};
