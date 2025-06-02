import type { Meta, StoryObj } from '@storybook/react';

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
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const VariantstarsOnly: Story = {
  name: 'Variant: starsOnly',
  args: {
    rating: 4.2,
    variant: 'starsOnly',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Variantminimal: Story = {
  name: 'Variant: minimal',
  args: {
    rating: 3.7,
    variant: 'minimal',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Sizelarge: Story = {
  name: 'Size: large',
  args: {
    rating: 3,
    size: 'large',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Sizesmall: Story = {
  name: 'Size: small',
  args: {
    rating: 2,
    size: 'small',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Sizexsmall: Story = {
  name: 'Size: xsmall',
  args: {
    rating: 1.5,
    size: 'xsmall',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Weightregular: Story = {
  name: 'Weight: regular',
  args: {
    rating: 3,
    weight: 'regular',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Weightmedium: Story = {
  name: 'Weight: medium',
  args: {
    rating: 2,
    weight: 'medium',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Weightstrong: Story = {
  name: 'Weight: strong',
  args: {
    rating: 1.5,
    weight: 'strong',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
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
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const RatingContrast: Story = {
  name: 'Rating Contrast',
  render: () => (
    <BackgroundContrastTest>
      <Rating rating={1.5} size="xsmall" />
    </BackgroundContrastTest>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
