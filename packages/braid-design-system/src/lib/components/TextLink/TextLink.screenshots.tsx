import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { makeBraidModes } from 'braid-storybook/modes';

import {
  Box,
  Heading,
  IconNewWindow,
  IconHome,
  Text,
  TextLink,
  Columns,
  Column,
  Stack,
  Strong,
  IconLink,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const textSizes = ['xsmall', 'small', 'standard', 'large'] as const;
const textTones = [
  'neutral',
  'secondary',
  'critical',
  'caution',
  'positive',
  'promote',
  'info',
] as const;
const headingLevels = ['1', '2', '3', '4'] as const;

const meta: Meta<typeof TextLink> = {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    chromatic: {
      modes: makeBraidModes({ viewports: ['tablet'] }),
    },
  },
  args: {
    href: '#',
    children: 'TextLink',
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const weightregular: Story = {
  name: 'weight: regular',
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const weightweak: Story = {
  name: 'weight: weak',
  args: {
    weight: 'weak',
  },
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const hitArealarge: Story = {
  name: 'hitArea: large',
  args: {
    hitArea: 'large',
  },
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const hitArealargevirtualtouchtarget: Story = {
  name: 'hitArea: large (virtual touch target)',
  args: {
    hitArea: 'large',
    children: 'virtual touch target',
  },
  decorators: (Story) => (
    <Text
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      This is the <Story />.
    </Text>
  ),
};

export const showVisited: Story = {
  name: 'showVisited',
  args: {
    showVisited: true,
    href: '',
    children: 'visited TextLink',
  },
  decorators: (Story) => (
    <Text>
      This is a <Story />.
    </Text>
  ),
};

export const Regularweightinsideavailabletextsizes: Story = {
  name: 'Regular weight inside available text sizes',
  render: () => (
    <Stack space="small">
      {textSizes.map((size) => (
        <Text size={size} key={size}>
          A <TextLink href="#">“regular“ TextLink</TextLink> inside{' '}
          <Strong>“{size || 'default'}“</Strong> Text
        </Text>
      ))}
    </Stack>
  ),
};

export const Weakweightinsideavailabletextsizes: Story = {
  name: 'Weak weight inside available text sizes',
  render: () => (
    <Stack space="small">
      {textSizes.map((size) => (
        <Text size={size} key={size}>
          A{' '}
          <TextLink href="#" weight="weak">
            “weak“ TextLink
          </TextLink>{' '}
          inside <Strong>“{size || 'default'}“</Strong> Text
        </Text>
      ))}
    </Stack>
  ),
};

export const Regularweightinsideavailabletexttones: Story = {
  name: 'Regular weight inside available text tones',
  render: () => (
    <Stack space="small">
      {textTones.map((t) => (
        <Text tone={t} key={t}>
          This is a <TextLink href="#">“regular“ TextLink</TextLink> inside{' '}
          <Strong>“{t || 'default'}“</Strong> tone Text
        </Text>
      ))}
    </Stack>
  ),
};

export const Weakweightinsideavailabletexttones: Story = {
  name: 'Weak weight inside available text tones',
  render: () => (
    <Stack space="small">
      {textTones.map((t) => (
        <Text tone={t} key={t}>
          This is a{' '}
          <TextLink href="#" weight="weak">
            “weak“ TextLink
          </TextLink>{' '}
          inside <Strong>“{t || 'default'}“</Strong> tone Text
        </Text>
      ))}
    </Stack>
  ),
};

export const Regularweightinsideavailableheadinglevels: Story = {
  name: 'Regular weight inside available heading levels',
  render: () => (
    <Stack space="medium">
      {headingLevels.map((level) => (
        <Heading level={level} key={level}>
          A <TextLink href="#">“regular“ TextLink</TextLink> inside level “
          {level}“
        </Heading>
      ))}
    </Stack>
  ),
};

export const Weakweightinsideavailableheadinglevels: Story = {
  name: 'Weak weight inside available heading levels',
  render: () => (
    <Stack space="medium">
      {headingLevels.map((level) => (
        <Heading level={level} key={level}>
          A{' '}
          <TextLink href="#" weight="weak">
            “weak“ TextLink
          </TextLink>{' '}
          inside level “{level}“
        </Heading>
      ))}
    </Stack>
  ),
};

export const Iconsinheritregularlinkcolour: Story = {
  name: 'Icons inherit regular link colour',
  render: () => (
    <Stack space="small">
      <Text>
        This icon matches the link colour:{' '}
        <TextLink href="#">
          TextLink <IconHome />
        </TextLink>
      </Text>
      <Text tone="secondary">
        This icon matches the link colour:{' '}
        <TextLink href="#">
          TextLink <IconHome />
        </TextLink>
      </Text>
      <Text tone="critical">
        This icon matches the link colour:{' '}
        <TextLink href="#">
          TextLink <IconHome />
        </TextLink>
      </Text>
    </Stack>
  ),
};

export const Iconsinheritweaklinkcolour: Story = {
  name: 'Icons inherit weak link colour',
  render: () => (
    <Stack space="small">
      <Text>
        This icon matches the link colour:{' '}
        <TextLink href="#" weight="weak">
          TextLink <IconHome />
        </TextLink>
      </Text>
      <Text tone="secondary">
        This icon matches the link colour:{' '}
        <TextLink href="#" weight="weak">
          TextLink <IconHome />
        </TextLink>
      </Text>
      <Text tone="critical">
        This icon matches the link colour:{' '}
        <TextLink href="#" weight="weak">
          TextLink <IconHome />
        </TextLink>
      </Text>
    </Stack>
  ),
};

export const Withiconslot: Story = {
  name: 'With icon slot',
  args: {
    icon: <IconLink />,
  },
  decorators: (Story) => (
    <Text>
      A sentence with a <Story />.
    </Text>
  ),
};

export const Withatrailingicon: Story = {
  name: 'With a trailing icon',
  args: {
    icon: <IconLink />,
    iconPosition: 'trailing',
  },
  decorators: (Story) => (
    <Text>
      A sentence with an icon trailing the <Story />.
    </Text>
  ),
};

export const Withiconslotandweightweak: Story = {
  name: 'With icon slot and weight weak',
  args: {
    weight: 'weak',
    icon: <IconLink />,
  },
  decorators: (Story) => (
    <Text>
      A sentence with a <Story />.
    </Text>
  ),
};

export const Withatrailingiconandweightweak: Story = {
  name: 'With a trailing icon and weight weak',
  args: {
    weight: 'weak',
    icon: <IconLink />,
    iconPosition: 'trailing',
  },
  decorators: (Story) => (
    <Text>
      A sentence with an icon trailing the <Story />.
    </Text>
  ),
};

export const TextContrast: Story = {
  name: 'Text Contrast',
  render: () => (
    <BackgroundContrastTest>
      {(background) => (
        <Columns space="xlarge">
          <Column>
            <Text>{background}</Text>
          </Column>
          <Column width="content">
            <Text>
              <TextLink href="#">
                Default <IconNewWindow />
              </TextLink>
            </Text>
          </Column>
          <Column width="content">
            <Text>
              <TextLink href="#" weight="regular">
                Regular <IconNewWindow />
              </TextLink>
            </Text>
          </Column>
          <Column>
            <Text>
              <TextLink href="#" weight="weak">
                Weak <IconNewWindow />
              </TextLink>
            </Text>
          </Column>
        </Columns>
      )}
    </BackgroundContrastTest>
  ),
};

export const HeadingContrast: Story = {
  name: 'Heading Contrast',
  render: () => (
    <BackgroundContrastTest>
      {(background) => (
        <Columns space="xlarge">
          <Column>
            <Heading level="4">{background}</Heading>
          </Column>
          <Column width="content">
            <Heading level="4">
              <TextLink href="#">
                Default <IconNewWindow />
              </TextLink>
            </Heading>
          </Column>
          <Column width="content">
            <Heading level="4">
              <TextLink href="#" weight="regular">
                Regular <IconNewWindow />
              </TextLink>
            </Heading>
          </Column>
          <Column>
            <Heading level="4">
              <TextLink href="#" weight="weak">
                Weak <IconNewWindow />
              </TextLink>
            </Heading>
          </Column>
        </Columns>
      )}
    </BackgroundContrastTest>
  ),
};

export const Underlinepositionwraptest: Story = {
  name: 'Underline position wrap test',
  render: () => (
    <Box style={{ maxWidth: 200 }}>
      <Stack space="large">
        <Text size="xsmall">
          xsmall{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap wrap wrap wrap Wrap
          </TextLink>
        </Text>
        <Text size="small">
          small{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap wrap wrap wrap Wrap
          </TextLink>
        </Text>
        <Text size="standard">
          standard{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap wrap wr Wrap
          </TextLink>
        </Text>
        <Text size="large">
          large{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap wrap wr Wrap
          </TextLink>
        </Text>

        <Heading level="4">
          Heading4{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap Wrap Wrap
          </TextLink>
        </Heading>
        <Heading level="3">
          Heading3{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap Wrap
          </TextLink>
        </Heading>
        <Heading level="2">
          H2{' '}
          <TextLink href="#" weight="weak">
            Abcing wrap wrap Wrap
          </TextLink>
        </Heading>
        <Heading level="1">
          H1{' '}
          <TextLink href="#" weight="weak">
            Abing wrap Wrap Wrap
          </TextLink>
        </Heading>
      </Stack>
    </Box>
  ),
};
