import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Box, Heading, Strong, Text, TextDropdown } from '../';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const meta: Meta<typeof TextDropdown> = {
  title: 'Components/TextDropdown',
  component: TextDropdown,
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState(args.value);
      return <Story args={{ ...args, value, onChange: setValue }} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof TextDropdown>;

export const Default: Story = {
  name: 'Default',
  args: {
    value: 'Developer',
    label: 'Job Title',
    options: ['Developer', 'Designer', 'Product Manager'],
  },
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const Withidentifyingvalues: Story = {
  name: 'With identifying values',
  args: {
    value: 2000,
    label: 'Location',
    options: [
      {
        text: 'Melbourne',
        value: 3000,
      },
      {
        text: 'Sydney',
        value: 2000,
      },
      {
        text: 'Brisbane',
        value: 4000,
      },
    ],
  },
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const Withinstrongtext: Story = {
  name: 'Within strong text',
  args: {
    value: 'Relevance',
    label: 'Sort order',
    options: ['Relevance', 'Keyword'],
  },
  decorators: [
    (Story) => (
      <Text>
        Sort by{' '}
        <Strong>
          <Story />
        </Strong>
      </Text>
    ),
  ],
};

export const Virtualtouchtarget: Story = {
  name: 'Virtual touch target',
  args: {
    value: 'Relevance',
    label: 'Sort order',
    options: ['Relevance', 'Keyword'],
  },

  decorators: [
    (Story) => (
      <Text
        data={{
          [debugTouchableAttrForDataProp]: '',
        }}
      >
        Sort by <Story />
      </Text>
    ),
  ],
};

export const Withinaheading: Story = {
  name: 'Within a heading',
  args: {
    value: 'Sydney',
    label: 'Location',
    options: ['Melbourne', 'Sydney', 'Brisbane'],
  },
  decorators: (Story) => (
    <Heading level="2">
      Jobs in <Story />
    </Heading>
  ),
};

export const TextDropdownonBrandBackground: Story = {
  name: 'TextDropdown on brand background',
  args: {
    value: 'Designer',
    label: 'Job Title',
    options: ['Developer', 'Designer', 'Product Manager'],
  },
  decorators: (Story) => (
    <Box background="brand" padding="gutter">
      <Text>
        <Story />
      </Text>
    </Box>
  ),
};
