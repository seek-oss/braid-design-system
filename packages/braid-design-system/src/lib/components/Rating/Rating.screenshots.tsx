import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Rating, Stack, Text } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  name: 'Default',
  args: {
    rating: 3,
  },
};

export const VariantstarsOnly: Story = {
  name: 'Variant: starsOnly',
  args: {
    rating: 4.2,
    variant: 'starsOnly',
  },
};

export const Variantminimal: Story = {
  name: 'Variant: minimal',
  args: {
    rating: 3.7,
    variant: 'minimal',
  },
};

export const Sizelarge: Story = {
  name: 'Size: large',
  args: {
    rating: 3,
    size: 'large',
  },
};

export const Sizesmall: Story = {
  name: 'Size: small',
  args: {
    rating: 2,
    size: 'small',
  },
};

export const Sizexsmall: Story = {
  name: 'Size: xsmall',
  args: {
    rating: 1.5,
    size: 'xsmall',
  },
};

export const Weightregular: Story = {
  name: 'Weight: regular',
  args: {
    rating: 3,
    weight: 'regular',
  },
};

export const Weightmedium: Story = {
  name: 'Weight: medium',
  args: {
    rating: 2,
    weight: 'medium',
  },
};

export const Weightstrong: Story = {
  name: 'Weight: strong',
  args: {
    rating: 1.5,
    weight: 'strong',
  },
};

export const Filltest: Story = {
  name: 'Fill test',
  render: () => (
    <Stack space="medium">
      <Text>Empty</Text>
      <Rating rating={0} />
      <Rating rating={0.01} />
      <Rating rating={0.24} />
      <Text>Half</Text>
      <Rating rating={0.25} />
      <Rating rating={0.74} />
      <Text>Full</Text>
      <Rating rating={0.75} />
      <Rating rating={0.99} />
      <Rating rating={1} />
    </Stack>
  ),
};

export const RatingContrast: Story = {
  name: 'Rating Contrast',
  render: () => (
    <BackgroundContrastTest>
      <Rating rating={1.5} size="xsmall" />
    </BackgroundContrastTest>
  ),
};
