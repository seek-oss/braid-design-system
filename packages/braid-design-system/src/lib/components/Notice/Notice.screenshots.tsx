import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Notice, Text, Stack, TextLink, List } from '../';

const meta = {
  title: 'Components/Notice',
  component: Notice,
  argTypes: {
    tone: {
      control: 'select',
      options: ['info', 'promote', 'positive', 'critical'],
      description: 'Sets the visual tone of the notice',
    },
    children: {
      control: 'text',
      description: 'Content to display within the notice',
    },
  },
  args: {
    tone: 'info',
    children: <Text>This is a notice message.</Text>,
  },
} satisfies Meta<typeof Notice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoNotice: Story = {
  args: {
    tone: 'info',
    children: <Text>This is an important piece of information.</Text>,
  },
};

export const Noticewithrichcontent: Story = {
  name: 'Notice with rich content',
  args: {
    tone: 'info',
    children: (
      <Stack space="medium">
        <Text>
          This is an important piece of information with a{' '}
          <TextLink href="#">TextLink.</TextLink>
        </Text>
        <List space="medium">
          <Text>Bullet 1</Text>
          <Text>Bullet 2</Text>
          <Text>Bullet 3</Text>
        </List>
      </Stack>
    ),
  },
};

export const PromoteNotice: Story = {
  args: {
    tone: 'promote',
    children: <Text>This is a promoted piece of information.</Text>,
  },
};

export const CriticalNotice: Story = {
  args: {
    tone: 'critical',
    children: <Text>This is a critical piece of information.</Text>,
  },
};

export const PositiveNotice: Story = {
  args: {
    tone: 'positive',
    children: <Text>This is a positive piece of information.</Text>,
  },
};

export const TestshouldbeleftalignedinacenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    tone: 'positive',
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sodales hendrerit nulla.
      </Text>
    ),
  },
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};
