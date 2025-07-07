import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { makeBraidModes } from 'braid-storybook/modes';

import { Box, Spread, Stack, Text, Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const meta = {
  title: 'Components/Spread',
  component: Spread,
  parameters: {
    // screenshotOnlyInWireframe: true,
    chromatic: {
      modes: makeBraidModes({
        viewports: ['xsmall', 'small', 'medium', 'large'],
        themes: ['wireframe'],
      }),
    },
  },
} satisfies Meta<typeof Spread>;

export default meta;
type Story = StoryObj<typeof Spread>;

export const Horizontal: Story = {
  name: 'Horizontal',
  args: {
    space: 'large',
    children: [
      <Placeholder key="1" height={60} width={50} />,
      <Placeholder key="2" height={60} width={80} />,
    ],
  },
};

export const Horizontalsinglefullwidthshouldbecontentwidthandspreadtoeachside: Story =
  {
    name: 'Horizontal single full width (should be content width and spread to each side)',
    render: () => (
      <Spread space="large">
        <Box background="neutral" width="full" padding="small">
          <Text>100% width</Text>
        </Box>
        <Box
          background="neutral"
          style={{
            width: 80,
          }}
          padding="small"
        >
          <Text>80px</Text>
        </Box>
      </Spread>
    ),
  };

export const Horizontalbothfullwidthshouldbecontentwidthandspreadtoeachside: Story =
  {
    name: 'Horizontal both full width (should be content width and spread to each side)',
    render: () => (
      <Spread space="large">
        <Box background="neutral" width="full" padding="small">
          <Text>100% width</Text>
        </Box>
        <Box background="neutral" width="full" padding="small">
          <Text>100% width</Text>
        </Box>
      </Spread>
    ),
  };

export const Horizontalsinglechildfullwidthshouldbecontentwidth: Story = {
  name: 'Horizontal single child full width (should be content width)',
  render: () => (
    <Spread space="large">
      <Box background="neutral" width="full" padding="small">
        <Text>100% width</Text>
      </Box>
    </Spread>
  ),
};

export const Horizontalresponsivespace: Story = {
  name: 'Horizontal responsive space',
  args: {
    space: {
      mobile: 'small',
      tablet: 'large',
      desktop: 'xlarge',
      wide: 'xxlarge',
    },
    children: [
      <Placeholder key="1" height={60} width="100%" />,
      <Placeholder key="2" height={60} width={80} />,
    ],
  },
};

export const HorizontalalignYtop: Story = {
  name: 'Horizontal alignY top',
  args: {
    space: 'large',
    alignY: 'top',
    children: [
      <Placeholder key="1" height={20} width={80} label="top" />,
      <Placeholder key="2" height={60} width="100%" />,
    ],
  },
};

export const HorizontalalignYcenter: Story = {
  name: 'Horizontal alignY center',
  args: {
    space: 'large',
    alignY: 'center',
    children: [
      <Placeholder key="1" height={20} width={80} label="center" />,
      <Placeholder key="2" height={60} width="100%" />,
    ],
  },
};

export const HorizontalalignYbottom: Story = {
  name: 'Horizontal alignY bottom',
  args: {
    space: 'large',
    alignY: 'bottom',
    children: [
      <Placeholder key="1" height={20} width={80} label="bottom" />,
      <Placeholder key="2" height={60} width="100%" />,
    ],
  },
};

export const Horizontalaligncenternoimpact: Story = {
  name: 'Horizontal align center (no impact)',
  args: {
    space: 'large',
    align: 'center',
    children: [
      <Placeholder key="1" height={60} width="100%" />,
      <Placeholder key="2" height={60} width={80} />,
    ],
  },
};

export const Vertical: Story = {
  name: 'Vertical',
  render: () => (
    <Tiles space="large" columns={3}>
      <Spread direction="vertical" space="large">
        <Placeholder height={60} width={50} />
        <Placeholder height={20} />
      </Spread>
      <Spread direction="vertical" space="large">
        <Placeholder height={20} width={50} />
        <Placeholder height={20} />
      </Spread>
      <Spread direction="vertical" space="large">
        <Placeholder height={100} width={50} />
        <Placeholder height={20} />
      </Spread>
    </Tiles>
  ),
};

export const Verticalsinglefullwidth: Story = {
  name: 'Vertical single full width',
  args: {
    direction: 'vertical',
    space: 'large',
    children: [
      <Placeholder key="1" height={60} width="100%" />,
      <Placeholder key="2" height={20} width={80} />,
    ],
  },
};

export const Verticalresponsivespace: Story = {
  name: 'Vertical responsive space',
  args: {
    direction: 'vertical',
    space: {
      mobile: 'small',
      tablet: 'large',
      desktop: 'xlarge',
      wide: 'xxlarge',
    },
    children: [
      <Placeholder key="1" height={60} width="100%" />,
      <Placeholder key="2" height={60} width={80} />,
    ],
  },
};

export const Verticalalignleft: Story = {
  name: 'Vertical align left',
  args: {
    direction: 'vertical',
    space: 'large',
    align: 'left',
    children: [
      <Placeholder key="1" height={20} width={80} label="left" />,
      <Placeholder key="2" height={60} width={100} />,
    ],
  },
};

export const Verticalaligncenter: Story = {
  name: 'Vertical align center',
  args: {
    direction: 'vertical',
    space: 'large',
    align: 'center',
    children: [
      <Placeholder key="1" height={20} width={80} label="center" />,
      <Placeholder key="2" height={60} width={100} />,
    ],
  },
};

export const Verticalalignright: Story = {
  name: 'Vertical align right',
  args: {
    direction: 'vertical',
    space: 'large',
    align: 'right',
    children: [
      <Placeholder key="1" height={20} width={80} label="right" />,
      <Placeholder key="2" height={60} width={100} />,
    ],
  },
};

export const VerticalalignYcenternoimpact: Story = {
  name: 'Vertical alignY center (no impact)',
  args: {
    direction: 'vertical',
    space: 'large',
    alignY: 'center',
    children: [
      <Placeholder key="1" height={60} width="100%" />,
      <Placeholder key="2" height={60} width={80} />,
    ],
  },
};

export const TestHorizontalwithoutalignYContentshouldaligntopandnotstretch: Story =
  {
    name: 'Test: Horizontal without alignY (`Content` should align top and not stretch)',
    render: () => (
      <Spread space="large">
        <Box
          background="neutral"
          style={{
            width: 105,
          }}
          padding="small"
        >
          <Text>Wrapping lines of content</Text>
        </Box>
        <Box background="promote" padding="small">
          <Text>Content</Text>
        </Box>
      </Spread>
    ),
  };

export const TestTexttruncationhorizontalshouldconsumeavailablespacewithoutpushingContentoutofscreen: Story =
  {
    name: 'Test: Text truncation horizontal, should consume available space without pushing `Content` out of screen',
    render: () => (
      <Spread space="large" alignY="center">
        <Text maxLines={1}>
          Should end in ellipsis. Another example of really really long text
          that will truncate even on the largest of screen resolutions.
        </Text>
        <Box background="neutral" padding="small">
          <Text>Content</Text>
        </Box>
      </Spread>
    ),
  };

export const TestTexttruncationverticalshouldbelimitedtocontainerwidthandrespectalignprop: Story =
  {
    name: 'Test: Text truncation vertical, should be limited to container width and respect `align` prop',
    render: () => (
      <Stack space="xlarge">
        {(['left', 'center', 'right'] as const).map((align) => (
          <Spread space="medium" direction="vertical" align={align} key={align}>
            <Text maxLines={1}>
              Should end in ellipsis. Another example of really really long text
              that will truncate even on the largest of screen resolutions.
            </Text>
            <Box background="promote" padding="small">
              <Text>Align {align}</Text>
            </Box>
            <Box background="neutral" width="full" padding="large">
              <Text>Full width</Text>
            </Box>
          </Spread>
        ))}
      </Stack>
    ),
  };
