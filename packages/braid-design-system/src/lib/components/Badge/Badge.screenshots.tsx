import type { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Badge, Inline, Heading, List, Text, Stack, Box, Tiles } from '../';
import { LayoutTest } from '../../utils/LayoutTest';

type TextSize = NonNullable<ComponentProps<typeof Text>['size']>;
type HeadingLevel = NonNullable<ComponentProps<typeof Heading>['level']>;

const textSizes: TextSize[] = ['xsmall', 'small', 'standard', 'large'];
const headingLevels: HeadingLevel[] = ['1', '2', '3', '4'];

const defaultParams = {
  chromatic: {
    viewports: [320],
  },
  layout: 'fullscreen',
};

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
  argTypes: {
    tone: {
      control: 'select',
      options: [
        'positive',
        'critical',
        'caution',
        'info',
        'promote',
        'neutral',
      ],
    },
    weight: {
      control: 'radio',
      options: ['regular', 'strong'],
    },
    bleedY: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const RegularBadge: Story = {
  name: 'Regular Badge',
  args: {
    tone: 'positive',
    children: 'Regular',
  },
  parameters: defaultParams,
};

export const StrongBadge: Story = {
  name: 'Strong Badge',
  args: {
    tone: 'positive',
    weight: 'strong',
    children: 'Strong',
  },
  parameters: defaultParams,
};

export const BadgewithVerticalBleed: Story = {
  name: 'Badge with Vertical Bleed',
  args: {
    tone: 'positive',
    bleedY: true,
    children: 'New',
  },
  parameters: defaultParams,
  decorators: [
    (Story) => (
      <Inline space="xsmall" alignY="center">
        <Heading level="4">Heading</Heading>
        <Story />
      </Inline>
    ),
  ],
};

export const PositiveBadge: Story = {
  name: 'Positive Badge',
  args: {
    tone: 'positive',
    children: 'Positive',
  },
  parameters: defaultParams,
};

export const StrongPositiveBadge: Story = {
  name: 'Strong Positive Badge',
  args: {
    tone: 'positive',
    weight: 'strong',
    children: 'Positive',
  },
  parameters: defaultParams,
};

export const CriticalBadge: Story = {
  name: 'Critical Badge',
  args: {
    tone: 'critical',
    children: 'Critical',
  },
  parameters: defaultParams,
};

export const StrongCriticalBadge: Story = {
  name: 'Strong Critical Badge',
  args: {
    tone: 'critical',
    weight: 'strong',
    children: 'Critical',
  },
  parameters: defaultParams,
};

export const CautionBadge: Story = {
  name: 'Caution Badge',
  args: {
    tone: 'caution',
    children: 'Caution',
  },
  parameters: defaultParams,
};

export const StrongCautionBadge: Story = {
  name: 'Strong Caution Badge',
  args: {
    tone: 'caution',
    weight: 'strong',
    children: 'Caution',
  },
  parameters: defaultParams,
};

export const InfoBadge: Story = {
  name: 'Info Badge',
  args: {
    tone: 'info',
    children: 'Info',
  },
  parameters: defaultParams,
};

export const StrongInfoBadge: Story = {
  name: 'Strong Info Badge',
  args: {
    tone: 'info',
    weight: 'strong',
    children: 'Info',
  },
  parameters: defaultParams,
};

export const PromoteBadge: Story = {
  name: 'Promote Badge',
  args: {
    tone: 'promote',
    children: 'Promote',
  },
  parameters: defaultParams,
};

export const StrongPromoteBadge: Story = {
  name: 'Strong Promote Badge',
  args: {
    tone: 'promote',
    weight: 'strong',
    children: 'Promote',
  },
  parameters: defaultParams,
};

export const NeutralBadge: Story = {
  name: 'Neutral Badge',
  args: {
    tone: 'neutral',
    children: 'Neutral',
  },
  parameters: defaultParams,
};

export const StrongNeutralBadge: Story = {
  name: 'Strong Neutral Badge',
  args: {
    tone: 'neutral',
    weight: 'strong',
    children: 'Neutral',
  },
  parameters: defaultParams,
};

export const TestBadgetextshouldfollowtonenotdefaultsetbyList: Story = {
  name: 'Test: Badge text should follow tone not default set by `List`',
  parameters: defaultParams,
  args: {
    tone: 'critical',
    children: 'Critical',
  },
  decorators: [
    (Story) => (
      <List tone="secondary">
        <Story />
        <Badge tone="critical" weight="strong">
          Critical
        </Badge>
      </List>
    ),
  ],
};

export const TestBadgeshouldnotimpactlineheightoftext: Story = {
  name: 'Test: Badge should not impact line height of text',
  parameters: defaultParams,
  args: {
    tone: 'critical',
    weight: 'strong',
    children: 'Critical',
  },
  decorators: [
    (Story) => (
      <Text>
        Incididunt consequat id nisi est dolore ipsum culpa eiusmod aliquip est
        deserunt incididunt aliqua culpa. <Story /> Incididunt consequat id nisi
        est dolore ipsum culpa eiusmod aliquip est deserunt incididunt aliqua
        culpa.
      </Text>
    ),
  ],
};

export const TestBadgeshouldnotimpactlineheightoftext2: Story = {
  name: 'Test: Badge should not impact line height of text',
  parameters: defaultParams,
  render: () => (
    <Stack space="large">
      {textSizes.map((size) => (
        <Tiles key={size} space="none" columns={2}>
          <Box position="relative">
            <Box
              style={{
                border: '1px solid red',
              }}
            />
            <Text size={size}>
              Hg{' '}
              <Badge tone="positive" weight="strong">
                Badge
              </Badge>
            </Text>
            <Box
              style={{
                border: '1px solid red',
              }}
            />
          </Box>
          <Box position="relative">
            <Box
              style={{
                border: '1px solid green',
              }}
            />
            <Text size={size}>Hg</Text>
            <Box
              style={{
                border: '1px solid green',
              }}
            />
          </Box>
        </Tiles>
      ))}
      {headingLevels.reverse().map((level) => (
        <Tiles key={level} space="none" columns={2}>
          <Box position="relative">
            <Box
              style={{
                border: '1px solid red',
              }}
            />
            <Heading level={level}>
              Hg{' '}
              <Badge tone="positive" weight="strong">
                Badge
              </Badge>
            </Heading>
            <Box
              style={{
                border: '1px solid red',
              }}
            />
          </Box>
          <Box position="relative">
            <Box
              style={{
                border: '1px solid green',
              }}
            />
            <Heading level={level}>Hg</Heading>
            <Box
              style={{
                border: '1px solid green',
              }}
            />
          </Box>
        </Tiles>
      ))}
    </Stack>
  ),
};

export const Layout: Story = {
  name: 'Layout',
  parameters: defaultParams,
  decorators: [
    () => (
      <Box maxWidth="xsmall">
        <LayoutTest>
          <Box>
            <Badge tone="positive" weight="strong">
              Lorem et veniam
            </Badge>
            <Badge tone="positive" weight="strong">
              Culpa Lorem et veniam tempor eiusmod fugiat mollit cillum. Do
              velit eu in.
            </Badge>
          </Box>
        </LayoutTest>
      </Box>
    ),
  ],
};
