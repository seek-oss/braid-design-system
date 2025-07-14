import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Alert, Text, Stack, TextLink, List, Box } from '../';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

type Story = StoryObj<typeof Alert>;

const meta = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
        risus ac lorem laoreet porta.
      </Text>
    ),
  },
} satisfies Meta<typeof Alert>;

export default meta;

export const InfoAlert: Story = {
  args: {
    tone: 'info',
  },
};

export const InfoAlertonasurface: Story = {
  name: 'Info Alert on a surface',
  args: {
    tone: 'info',
  },
  decorators: (Story) => (
    <Box padding="medium" background="surface">
      <Story />
    </Box>
  ),
};

export const DismissibleAlert: Story = {
  args: {
    onClose: () => {},
    closeLabel: 'Close info alert',
  },
};

export const DismissibleAlertVirtualTouchTarget: Story = {
  name: 'Dismissible Alert (virtual touch target)',
  args: {
    data: {
      [debugTouchableAttrForDataProp]: '',
    },
    closeLabel: 'Close info alert',
    tone: 'info',
    onClose: () => {},
  },
};

export const AlertWithRichContent: Story = {
  args: {
    tone: 'info',
    children: (
      <Stack space="large">
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

export const PromoteAlert: Story = {
  args: {
    tone: 'promote',
  },
};

export const PromoteAlertonasurface: Story = {
  name: 'Promote Alert on a surface',
  args: {
    tone: 'promote',
  },
  decorators: (Story) => (
    <Box padding="medium" background="surface">
      <Story />
    </Box>
  ),
};

export const CautionAlert: Story = {
  args: {
    tone: 'caution',
  },
};

export const CautionAlertonasurface: Story = {
  name: 'Caution Alert on a surface',
  args: {
    tone: 'caution',
  },
  decorators: (Story) => (
    <Box padding="medium" background="surface">
      <Story />
    </Box>
  ),
};

export const CriticalAlert: Story = {
  args: {
    tone: 'critical',
  },
};

export const CriticalAlertonasurface: Story = {
  name: 'Critical Alert on a surface',
  args: {
    tone: 'critical',
  },
  decorators: (Story) => (
    <Box padding="medium" background="surface">
      <Story />
    </Box>
  ),
};

export const PositiveAlert: Story = {
  args: {
    tone: 'positive',
  },
};

export const PositiveAlertonasurface: Story = {
  name: 'Positive Alert on a surface',
  args: {
    tone: 'positive',
  },
  decorators: (Story) => (
    <Box padding="medium" background="surface">
      <Story />
    </Box>
  ),
};

export const TestshouldbeleftalignedinacenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};
