import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Avatar, IconCompany, IconPhotoAdd, Inline, Stack, Text } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

import * as styles from './Avatar.css';
import { photoPlaceholderUrl as imageUrl } from './photoPlaceholder.css';

const avatarSizes = Object.keys(styles.size) as Array<keyof typeof styles.size>;

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    name: 'Leia Organa',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: avatarSizes,
    },
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
      {avatarSizes.map((size) => (
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
      {avatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar size={size} />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const ImageSizes: Story = {
  name: 'Image sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {avatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar name="Leia Organa" size={size} imageUrl={imageUrl} />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const ImageErrorSizes: Story = {
  name: 'Image error sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {avatarSizes.map((size) => (
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

export const LoadingSizes: Story = {
  name: 'Loading sizes',
  render: () => (
    <Inline space="medium" alignY="center">
      {avatarSizes.map((size) => (
        <Stack key={size} space="xsmall" align="center">
          <Avatar name="Leia Organa" size={size} loading />
          <Text size="small">{size}</Text>
        </Stack>
      ))}
    </Inline>
  ),
};

export const CompanyFallback: Story = {
  name: 'Company icon fallback',
  render: () => (
    <Inline space="medium" alignY="center">
      <Avatar icon={<IconCompany />} />
      <Avatar imageUrl={imageUrl} />
    </Inline>
  ),
};

export const AddPhoto: Story = {
  name: 'Add photo',
  render: () => (
    <Avatar
      icon={<IconPhotoAdd />}
      aria-label="Add photo"
      onClick={() => undefined}
    />
  ),
};

export const UpdatePhoto: Story = {
  name: 'Update photo hover overlay',
  render: () => (
    <Avatar
      size="xxlarge"
      imageUrl={imageUrl}
      icon={<IconPhotoAdd />}
      aria-label="Update photo"
    />
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
      <Avatar name="Leia Organa" />
      <Avatar />
      <Avatar name="Leia Organa" loading />
    </Inline>
  ),
};
