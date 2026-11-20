import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';
import { useLayoutEffect, useRef } from 'react';

import { Box, Inline, ScrollContainer, Stack, Text } from '../';
import { Placeholder } from '../../playroom/components';

import { vars } from '../../themes/vars.css';

const horizontalContent = (
  <Inline space="small" noWrap>
    <Placeholder width={100} height={64} label="1" />
    <Placeholder width={100} height={64} label="2" />
    <Placeholder width={100} height={64} label="3" />
    <Placeholder width={100} height={64} label="4" />
    <Placeholder width={100} height={64} label="5" />
    <Placeholder width={100} height={64} label="6" />
  </Inline>
);

const verticalItems = ['1', '2', '3', '4', '5', '6', '7', '8'] as const;

const verticalContent = (
  <Stack space="small">
    {verticalItems.map((label) => (
      <Placeholder key={label} height={48} label={label} />
    ))}
  </Stack>
);

const ScrollOffset = ({
  left = 0,
  top = 0,
}: {
  left?: number | 'end';
  top?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = ref.current?.parentElement;

    if (!container) {
      return;
    }

    container.scrollLeft = left === 'end' ? container.scrollWidth : left;
    container.scrollTop = top;
  }, [left, top]);

  return <div ref={ref} />;
};

const StartRefScroll = ({ scrollTop }: { scrollTop: number }) => {
  const startRef = useRef<HTMLElement>(null);

  return (
    <Box style={{ height: 180, maxWidth: 240 }}>
      <ScrollContainer
        direction="vertical"
        startRef={startRef}
        fadeSize="small"
      >
        <ScrollOffset top={scrollTop} />
        <Placeholder height={80} label="Cover" />
        <Box ref={startRef} style={{ height: 1 }} />
        {verticalContent}
      </ScrollContainer>
    </Box>
  );
};

const meta = {
  title: 'Components/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    chromatic: setChromatic({ wireframeOnly: true }),
  },
  decorators: [
    (Story) => (
      <Box padding="small">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ScrollContainer>;

export default meta;

type Story = StoryObj<typeof ScrollContainer>;

const scrolledParameters = {
  chromatic: {
    ...setChromatic({ wireframeOnly: true }),
    delay: 300,
  },
};

export const Horizontal: Story = {
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer>{horizontalContent}</ScrollContainer>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box style={{ height: 180, maxWidth: 240 }}>
      <ScrollContainer direction="vertical">{verticalContent}</ScrollContainer>
    </Box>
  ),
};

export const BothDirections: Story = {
  name: 'Both directions',
  render: () => (
    <Box style={{ height: 180, maxWidth: 240 }}>
      <ScrollContainer direction="all">
        <Box style={{ width: 480 }}>{verticalContent}</Box>
      </ScrollContainer>
    </Box>
  ),
};

export const FadeSizeSmall: Story = {
  name: 'Fade size small',
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer fadeSize="small">{horizontalContent}</ScrollContainer>
    </Box>
  ),
};

export const FadeSizeMedium: Story = {
  name: 'Fade size medium',
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer fadeSize="medium">{horizontalContent}</ScrollContainer>
    </Box>
  ),
};

export const FadeSizeLarge: Story = {
  name: 'Fade size large',
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer fadeSize="large">{horizontalContent}</ScrollContainer>
    </Box>
  ),
};

export const SemanticElement: Story = {
  name: 'Semantic element',
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer component="section">{horizontalContent}</ScrollContainer>
    </Box>
  ),
};

export const HideScrollbar: Story = {
  name: 'Hide scrollbar',
  render: () => (
    <Stack space="small">
      <Stack space="xsmall">
        <Text size="small">Scrollbar</Text>
        <Box style={{ maxWidth: 240 }}>
          <ScrollContainer>{horizontalContent}</ScrollContainer>
        </Box>
      </Stack>
      <Stack space="xsmall">
        <Text size="small">Hidden scrollbar</Text>
        <Box style={{ maxWidth: 240 }}>
          <ScrollContainer hideScrollbar>{horizontalContent}</ScrollContainer>
        </Box>
      </Stack>
    </Stack>
  ),
};

export const ScrolledHorizontally: Story = {
  name: 'Scrolled horizontally',
  parameters: scrolledParameters,
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer>
        <ScrollOffset left={80} />
        {horizontalContent}
      </ScrollContainer>
    </Box>
  ),
};

// The direct child is only as wide as the scrollport unless it is allowed to
// grow with its content. The positive colour fills only the right padding, so
// scrolling to the end shows a green block after the placeholders.
export const HorizontalEndPadding: Story = {
  name: 'Horizontal end padding (green box visible at end)',
  parameters: scrolledParameters,
  render: () => (
    <Box style={{ maxWidth: 240 }}>
      <ScrollContainer>
        <ScrollOffset left="end" />
        <Box
          paddingRight="large"
          style={{
            backgroundImage: `linear-gradient(${vars.backgroundColor.positive}, ${vars.backgroundColor.positive})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: `${vars.space.large} 100%`,
          }}
        >
          {horizontalContent}
        </Box>
      </ScrollContainer>
    </Box>
  ),
};

export const ScrolledVertically: Story = {
  name: 'Scrolled vertically',
  parameters: scrolledParameters,
  render: () => (
    <Box style={{ height: 180, maxWidth: 240 }}>
      <ScrollContainer direction="vertical">
        <ScrollOffset top={60} />
        {verticalContent}
      </ScrollContainer>
    </Box>
  ),
};

export const StartRefBeforeSentinel: Story = {
  name: 'Start ref before sentinel',
  parameters: scrolledParameters,
  render: () => <StartRefScroll scrollTop={24} />,
};

export const StartRefAfterSentinel: Story = {
  name: 'Start ref after sentinel',
  parameters: scrolledParameters,
  render: () => <StartRefScroll scrollTop={120} />,
};
