import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Badge, Inline, Heading, List, Text, Stack, Box, Tiles } from '../';
import { LayoutTest } from '../../utils/LayoutTest';

import { validBadgeTones, validBadgeWeights } from './Badge';

import { heading, textSizeUntrimmed } from '../../css/typography.css';

const textSizes = Object.keys(textSizeUntrimmed) as Array<
  keyof typeof textSizeUntrimmed
>;
const headingLevels = Object.keys(heading).sort() as Array<
  keyof typeof heading
>;

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    tone: {
      control: 'select',
      options: validBadgeTones,
    },
    weight: {
      control: 'radio',
      options: validBadgeWeights,
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
  args: {
    tone: 'positive',
    children: 'Regular',
  },
};

export const StrongBadge: Story = {
  args: {
    tone: 'positive',
    weight: 'strong',
    children: 'Strong',
  },
};

export const BadgeWithVerticalBleed: Story = {
  name: 'Badge with Vertical Bleed',
  args: {
    tone: 'positive',
    bleedY: true,
    children: 'New',
  },
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
  args: {
    tone: 'positive',
    children: 'Positive',
  },
};

export const StrongPositiveBadge: Story = {
  args: {
    tone: 'positive',
    weight: 'strong',
    children: 'Positive',
  },
};

export const CriticalBadge: Story = {
  args: {
    tone: 'critical',
    children: 'Critical',
  },
};

export const StrongCriticalBadge: Story = {
  args: {
    tone: 'critical',
    weight: 'strong',
    children: 'Critical',
  },
};

export const CautionBadge: Story = {
  args: {
    tone: 'caution',
    children: 'Caution',
  },
};

export const StrongCautionBadge: Story = {
  args: {
    tone: 'caution',
    weight: 'strong',
    children: 'Caution',
  },
};

export const InfoBadge: Story = {
  args: {
    tone: 'info',
    children: 'Info',
  },
};

export const StrongInfoBadge: Story = {
  args: {
    tone: 'info',
    weight: 'strong',
    children: 'Info',
  },
};

export const PromoteBadge: Story = {
  args: {
    tone: 'promote',
    children: 'Promote',
  },
};

export const StrongPromoteBadge: Story = {
  args: {
    tone: 'promote',
    weight: 'strong',
    children: 'Promote',
  },
};

export const NeutralBadge: Story = {
  args: {
    tone: 'neutral',
    children: 'Neutral',
  },
};

export const StrongNeutralBadge: Story = {
  args: {
    tone: 'neutral',
    weight: 'strong',
    children: 'Neutral',
  },
};

export const TestBadgeTextShouldFollowToneNotDefaultSetByList: Story = {
  name: 'Test: Badge text should follow tone not default set by `List`',
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

export const TestBadgeShouldNotImpactLineHeightOfText: Story = {
  name: 'Test: Badge should not impact line height of text',
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

export const TestBadgeShouldNotImpactLineHeightOfText2: Story = {
  name: 'Test: Badge should not impact line height of text',
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
  render: () => (
    <Box maxWidth="xsmall">
      <LayoutTest>
        <Box>
          <Badge tone="positive" weight="strong">
            Lorem et veniam
          </Badge>
          <Badge tone="positive" weight="strong">
            Culpa Lorem et veniam tempor eiusmod fugiat mollit cillum. Do velit
            eu in.
          </Badge>
        </Box>
      </LayoutTest>
    </Box>
  ),
};
