import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
    screenshotOnlyInWireframe: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const weightregular: Story = {
  render: () => (
    <Text>
      <TextLink href="#">TextLink</TextLink>
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const weightweak: Story = {
  render: () => (
    <Text>
      <TextLink href="#" weight="weak">
        TextLink
      </TextLink>
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const hitArealarge: Story = {
  render: () => (
    <Text>
      <TextLink href="#" hitArea="large">
        TextLink
      </TextLink>
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const hitArealargevirtualtouchtarget: Story = {
  render: () => (
    <Text
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      This is the{' '}
      <TextLink href="" hitArea="large">
        virtual touch target
      </TextLink>
      .
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const showVisited: Story = {
  render: () => (
    <Text>
      This is a{' '}
      <TextLink href="" showVisited>
        visited TextLink
      </TextLink>
      .
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Regularweightinsideavailabletextsizes: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Weakweightinsideavailabletextsizes: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Regularweightinsideavailabletexttones: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Weakweightinsideavailabletexttones: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Regularweightinsideavailableheadinglevels: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Weakweightinsideavailableheadinglevels: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Iconsinheritregularlinkcolour: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Iconsinheritweaklinkcolour: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Withiconslot: Story = {
  render: () => (
    <Text>
      A sentence with a{' '}
      <TextLink href="" icon={<IconLink />}>
        TextLink
      </TextLink>
      .
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Withatrailingicon: Story = {
  render: () => (
    <Text>
      A sentence with an icon trailing the{' '}
      <TextLink href="" icon={<IconLink />} iconPosition="trailing">
        TextLink
      </TextLink>
      .
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Withiconslotandweightweak: Story = {
  render: () => (
    <Text>
      A sentence with a{' '}
      <TextLink href="" weight="weak" icon={<IconLink />}>
        TextLink
      </TextLink>
      .
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Withatrailingiconandweightweak: Story = {
  render: () => (
    <Text>
      A sentence with an icon trailing the{' '}
      <TextLink
        href=""
        weight="weak"
        icon={<IconLink />}
        iconPosition="trailing"
      >
        TextLink
      </TextLink>
      .
    </Text>
  ),
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};

export const Underlinepositionwraptest: Story = {
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
  parameters: {
    chromatic: {
      viewports: [768],
    },
    layout: 'fullscreen',
  },
};
