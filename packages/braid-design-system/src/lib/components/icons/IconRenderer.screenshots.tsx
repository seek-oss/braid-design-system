import type { Meta, StoryObj } from '@storybook/react-webpack5';
import type { ComponentProps } from 'react';

import { Text, Heading, IconRenderer, Stack } from '../';

const meta = {
  title: 'Components/IconRenderer',
  component: IconRenderer,
} satisfies Meta<typeof IconRenderer>;

export default meta;
type Story = StoryObj<typeof IconRenderer>;

const CustomIcon = ({
  tone,
}: Pick<ComponentProps<typeof IconRenderer>, 'tone'>) => (
  <IconRenderer tone={tone}>
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
  render: () => (
    <Stack space="large">
      <Text size="xsmall" icon={<CustomIcon />}>
        Text xsmall with custom icon
      </Text>
      <Text size="small" icon={<CustomIcon />}>
        Text small with custom icon
      </Text>
      <Text size="standard" icon={<CustomIcon />}>
        Text standard with custom icon
      </Text>
      <Text size="large" icon={<CustomIcon />}>
        Text large with custom icon
      </Text>
      <Heading level="4" icon={<CustomIcon />}>
        Heading 4 with custom icon
      </Heading>
      <Heading level="3" icon={<CustomIcon />}>
        Heading 3 with custom icon
      </Heading>
      <Heading level="2" icon={<CustomIcon />}>
        Heading 2 with custom icon
      </Heading>
      <Heading level="1" icon={<CustomIcon />}>
        Heading 1 with custom icon
      </Heading>
    </Stack>
  ),
};

export const InheritedTone: Story = {
  render: () => (
    <Text size="large" icon={<CustomIcon />} tone="positive">
      Text large with custom icon
    </Text>
  ),
};

export const ExplictToneInText: Story = {
  render: () => (
    <Text size="large" icon={<CustomIcon tone="brandAccent" />} tone="positive">
      Text large with custom icon
    </Text>
  ),
};

export const ExplictToneInHeading: Story = {
  render: () => (
    <Heading level="2" icon={<CustomIcon tone="brandAccent" />}>
      Heading 2 with custom icon
    </Heading>
  ),
};
