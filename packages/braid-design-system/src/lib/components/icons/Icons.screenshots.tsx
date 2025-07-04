import type { Meta, StoryObj } from '@storybook/react-webpack5';

import {
  Text,
  Heading,
  Inline,
  Button,
  Stack,
  Spread,
  Box,
  IconAI,
  IconAdd,
  IconArrow,
  IconBookmark,
} from '../';
import type { UseIconProps } from '../../hooks/useIcon';

import * as icons from './index';

import {
  heading as headingSizes,
  textSizeUntrimmed as textSizes,
  tone as tones,
} from '../../css/typography.css';
import { vars } from '../../themes/vars.css';

type IconName = keyof typeof icons;
const iconNames = Object.keys(icons).map((icon) => icon as IconName);

const Icons = ({ tone }: { tone?: UseIconProps['tone'] }) => (
  <Inline space="small">
    {iconNames.map((icon) => {
      const IconComponent = icons[icon];
      return <IconComponent key={icon} tone={tone} />;
    })}
  </Inline>
);

const IconDemo = () => <Icons />;

const meta = {
  title: 'Components/Icons',
  component: IconDemo,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof IconDemo>;

export default meta;

type Story = StoryObj<typeof IconDemo>;

export const Default: Story = {
  name: 'Default',
  render: () => <Icons />,
};

export const AutoSizeViaTextContext: Story = {
  name: 'Auto size (via TextContext)',
  render: () => {
    const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;
    return (
      <Stack space="large">
        {sizes.map((size) => (
          <Stack key={size} space="medium">
            <Text size={size}>{size}</Text>
            <Text size={size}>
              <Icons />
            </Text>
          </Stack>
        ))}
      </Stack>
    );
  },
};

export const AutoSizeViaHeadingContext: Story = {
  name: 'Auto Size (via HeadingContext)',
  render: () => {
    const headings = Object.keys(headingSizes) as Array<
      keyof typeof headingSizes
    >;
    return (
      <Stack space="large">
        {headings
          .sort()
          .reverse()
          .map((heading) => (
            <Stack key={heading} space="medium">
              <Heading level={heading}>Level {heading}</Heading>
              <Heading level={heading}>
                <Icons />
              </Heading>
            </Stack>
          ))}
      </Stack>
    );
  },
};

export const AutoToneViaTextContext: Story = {
  name: 'Auto Tone (via TextContext)',
  render: () => {
    const iconTones = Object.keys(tones).sort() as Array<keyof typeof tones>;
    return (
      <Stack space="large">
        {iconTones.map((tone) => (
          <Stack key={tone} space="medium">
            <Text tone={tone}>{tone}</Text>
            <Text tone={tone}>
              <Icons />
            </Text>
          </Stack>
        ))}
      </Stack>
    );
  },
};

export const OverrideAutoTone: Story = {
  name: 'Override auto tone explicitly',
  render: () => (
    <Text tone="critical">
      Critical text overridden to positive icons:
      <Icons tone="positive" />
    </Text>
  ),
};

export const AutoToneWithBackgroundContrast: Story = {
  name: 'Auto Tone with Background Contrast (via TextContext)',
  render: () => (
    <Stack space="medium">
      <Text>Default:</Text>
      <Text>
        <Icons />
      </Text>
      <Text>Explicitly positive:</Text>
      <Text>
        <Icons tone="positive" />
      </Text>
    </Stack>
  ),
};

export const AlignmentToText: Story = {
  name: 'Alignment to text',
  render: () => (
    <Stack space="small">
      {iconNames.map((iconName) => {
        const IconComponent = icons[iconName];
        return (
          <Inline key={iconName} space="medium">
            <Text>
              <IconComponent /> Uppercase
            </Text>
            <Text>
              Lowercase <IconComponent alignY="lowercase" />
            </Text>
          </Inline>
        );
      })}
    </Stack>
  ),
};

export const AlignmentToButtons: Story = {
  name: 'Alignment to buttons',
  render: () => (
    <Stack space="small">
      {iconNames.map((iconName) => {
        const IconComponent = icons[iconName];
        return (
          <Inline key={iconName} space="small">
            <Button variant="solid">
              <IconComponent /> Upper
            </Button>
            <Button variant="solid">
              Lower <IconComponent alignY="lowercase" />
            </Button>
          </Inline>
        );
      })}
    </Stack>
  ),
};

export const InlineSizingTest: Story = {
  name: 'Test: inline sizing comparing `Inline` (left) to custom flex container (right)',
  render: () => {
    const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;
    return (
      <Stack space="large">
        {sizes.map((size) => (
          <Text size={size} key={size}>
            <Box
              maxWidth="xsmall"
              style={{
                borderTop: '2px solid red',
                borderBottom: '2px solid red',
              }}
            >
              <Spread space="small">
                <Inline space="small">
                  <IconAI />
                  <IconAdd />
                  <IconArrow />
                  <IconBookmark />
                </Inline>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  style={{
                    gap: vars.space.small,
                  }}
                >
                  <IconAI />
                  <IconAdd />
                  <IconArrow />
                  <IconBookmark />
                </Box>
              </Spread>
            </Box>
          </Text>
        ))}
      </Stack>
    );
  },
};
