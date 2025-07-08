import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, Heading, IconRenderer, Stack } from '../';

const meta = {
  title: 'Components/IconRenderer',
  component: IconRenderer,
} satisfies Meta<typeof IconRenderer>;

export default meta;
type Story = StoryObj<typeof IconRenderer>;

const customIcon = (
  <IconRenderer>
    {({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    )}
  </IconRenderer>
);

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Stack space="large">
      <Text size="xsmall" icon={customIcon}>
        Text xsmall with custom icon
      </Text>
      <Text size="small" icon={customIcon}>
        Text small with custom icon
      </Text>
      <Text size="standard" icon={customIcon}>
        Text standard with custom icon
      </Text>
      <Text size="large" icon={customIcon}>
        Text large with custom icon
      </Text>
      <Heading level="4" icon={customIcon}>
        Heading 4 with custom icon
      </Heading>
      <Heading level="3" icon={customIcon}>
        Heading 3 with custom icon
      </Heading>
      <Heading level="2" icon={customIcon}>
        Heading 2 with custom icon
      </Heading>
      <Heading level="1" icon={customIcon}>
        Heading 1 with custom icon
      </Heading>
    </Stack>
  ),
};
