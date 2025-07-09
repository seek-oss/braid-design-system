import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { Alert, Text, Stack, TextLink, List, Box } from '../';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import type { AlertProps } from './Alert';

type Story = StoryObj<typeof Alert>;

const meta = {
  title: 'Components/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

const AlertContent = ({ tone = 'info' }: { tone?: AlertProps['tone'] }) => (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in risus
    ac lorem laoreet porta.
  </Text>
);

export const InfoAlert: Story = {
  name: 'Info Alert',
  args: {
    children: <AlertContent />,
  },
};

export const InfoAlertonasurface: Story = {
  name: 'Info Alert on a surface',
  render: () => (
    <Box padding="medium" background="surface">
      <Alert tone="info">
        <AlertContent />
      </Alert>
    </Box>
  ),
};

export const Dismissiblealert: Story = {
  name: 'Dismissible alert',
  args: {
    children: <AlertContent />,
    onClose: () => {},
    closeLabel: 'Close info alert',
  },
};

export const Dismissiblealertvirtualtouchtarget: Story = {
  name: 'Dismissible alert (virtual touch target)',
  args: {
    children: <AlertContent />,
    data: {
      [debugTouchableAttrForDataProp]: '',
    },
    closeLabel: 'Close info alert',
    tone: 'info',
    onClose: () => {},
  },
};

export const Alertwithrichcontent: Story = {
  name: 'Alert with rich content',
  args: {
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
    tone: 'info',
  },
};

export const PromoteAlert: Story = {
  name: 'Promote Alert',
  args: {
    tone: 'promote',
    children: <AlertContent tone="promote" />,
  },
};

export const PromoteAlertonasurface: Story = {
  name: 'Promote Alert on a surface',
  render: () => (
    <Box padding="medium" background="surface">
      <Alert tone="promote">
        <Text>This is a promoted piece of information.</Text>
      </Alert>
    </Box>
  ),
  args: {
    tone: 'promote',
    children: <AlertContent tone="promote" />,
  },
};

export const CautionAlert: Story = {
  name: 'Caution Alert',
  args: {
    tone: 'caution',
    children: <AlertContent tone="caution" />,
  },
};

export const CautionAlertonasurface: Story = {
  name: 'Caution Alert on a surface',
  render: () => (
    <Box padding="medium" background="surface">
      <Alert tone="caution">
        <AlertContent tone="caution" />
      </Alert>
    </Box>
  ),
};

export const CriticalAlert: Story = {
  name: 'Critical Alert',
  args: {
    tone: 'critical',
    children: <AlertContent tone="critical" />,
  },
};

export const CriticalAlertonasurface: Story = {
  name: 'Critical Alert on a surface',
  render: () => (
    <Box padding="medium" background="surface">
      <Alert tone="critical">
        <AlertContent tone="critical" />
      </Alert>
    </Box>
  ),
};

export const PositiveAlert: Story = {
  name: 'Positive Alert',
  args: {
    tone: 'positive',
    children: <AlertContent tone="positive" />,
  },
};

export const PositiveAlertonasurface: Story = {
  name: 'Positive Alert on a surface',
  render: () => (
    <Box padding="medium" background="surface">
      <Alert tone="positive">
        <AlertContent tone="positive" />
      </Alert>
    </Box>
  ),
};

export const TestshouldbeleftalignedinacenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <Alert tone="positive">
        <Text>
          Enim elit eu et culpa non esse voluptate labore in ea. Incididunt
          irure aliquip cillum occaecat irure.
        </Text>
      </Alert>
    </Stack>
  ),
};
