import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

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

import { heading, tone, textSizeTrimmed } from '../../css/typography.css';

const textSizes = [
  undefined, // test default case
  ...(Object.keys(textSizeTrimmed) as Array<keyof typeof textSizeTrimmed>),
];
const textTones = [
  undefined, // test default case
  ...(Object.keys(tone) as Array<keyof typeof tone>),
];
const headingLevels = Object.keys(heading) as Array<keyof typeof heading>;

const meta: Meta<typeof TextLink> = {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    chromatic: setChromatic({ viewports: ['tablet'] }),
  },
  args: {
    href: '#',
    children: 'TextLink',
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const WeightRegular: Story = {
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const WeightWeak: Story = {
  args: {
    weight: 'weak',
  },
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const HitAreaLarge: Story = {
  args: {
    hitArea: 'large',
  },
  decorators: (Story) => (
    <Text>
      <Story />
    </Text>
  ),
};

export const HitAreaLargeVirtualTouchTarget: Story = {
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

export const ShowVisited: Story = {
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

export const RegularWeightInsideAvailableTextSizes: Story = {
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

export const WeakWeightInsideAvailableTextSizes: Story = {
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

export const RegularWeightInsideAvailableTextTones: Story = {
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

export const WeakWeightInsideAvailableTextTones: Story = {
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

export const RegularWeightInsideAvailableHeadingLevels: Story = {
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

export const WeakWeightInsideAvailableHeadingLevels: Story = {
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

export const IconsInheritRegularLinkColour: Story = {
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

export const IconsInheritWeakLinkColour: Story = {
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

export const WithIconSlot: Story = {
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

export const WithATrailingIcon: Story = {
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

export const WithIconSlotAndWeightWeak: Story = {
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

export const WithATrailingIconAndWeightWeak: Story = {
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

export const UnderlinePositionWrapTest: Story = {
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
