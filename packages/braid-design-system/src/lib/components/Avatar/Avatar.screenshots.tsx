import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Avatar, IconPeople, Inline, Stack, Text } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

import { validAvatarSizes } from './Avatar';

import { photoPlaceholderUrl as photoUrl } from './photoPlaceholder.css';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    variant: 'initials',
    name: 'Leia Elise',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  args: {
    variant: 'initials',
  },
};

export const Icon: Story = {
  args: {
    variant: 'icon',
  },
};

export const InitialsSizes: Story = {
  name: 'Initials sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar variant="initials" name="Leia Elise" size={size} />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const IconSizes: Story = {
  name: 'Icon sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar variant="icon" name="Leia Elise" size={size} />
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
          <Avatar
            variant="initials"
            name="Leia Elise"
            size={size}
            photoUrl={photoUrl}
          />
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
            variant="initials"
            name="Leia Elise"
            size={size}
            photoError
          />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const BorderSizes: Story = {
  name: 'Border sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar variant="initials" name="Leia Elise" size={size} border />
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
          <Avatar variant="initials" name="Leia Elise" size={size} loading />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const CustomIcon: Story = {
  name: 'Custom icon',
  render: () => (
    <Inline space="medium" alignY="center">
      {validAvatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar
            variant="icon"
            name="Leia Elise"
            size={size}
            icon={<IconPeople />}
          />
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
      <Avatar variant="initials" name="Leia Elise" border />
      <Avatar variant="icon" name="Leia Elise" border />
      <Avatar variant="initials" name="Leia Elise" loading border />
    </Inline>
  ),
};
