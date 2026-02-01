import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import type React from 'react';

import { setChromatic } from 'braid-storybook/chromatic';

import { Box, Page } from '..';
import { Placeholder } from '../../playroom/components';

import { heightLimit } from './Page.css';

const viewportHeight = 300;

const Container = ({ children }: { children: React.ReactNode }) => (
  <Box
    position="relative"
    style={assignInlineVars({ [heightLimit]: `${viewportHeight}px` })}
  >
    <Box
      boxShadow="borderNeutralLarge"
      borderRadius="large"
      position="absolute"
      top={0}
      left={0}
      right={0}
      height="full"
      style={{
        maxHeight: viewportHeight,
      }}
    />
    {children}
  </Box>
);

const meta = {
  title: 'Components/Page',
  component: Page,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile'],
      wireframeOnly: true,
    }),
  },
  argTypes: {
    children: {
      description: 'Content to display on the page',
    },
    footer: {
      description: 'Footer content to display',
    },
    footerPosition: {
      control: 'radio',
      options: [undefined, 'belowFold'],
      description: 'Position of the footer relative to the content',
    },
  },
  args: {
    children: (
      <>
        <Placeholder label="Header" height={50} />
        <Placeholder label="Content" height={50} />
      </>
    ),
    footer: (
      <Box background="promoteLight">
        <Placeholder label="Footer" height={50} />
      </Box>
    ),
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footer: (
      <Box background="promoteLight">
        <Placeholder label="Footer above fold" height={50} />
      </Box>
    ),
  },
};

export const BelowFold: Story = {
  name: 'Below fold',
  args: {
    footerPosition: 'belowFold',
    footer: (
      <Box background="promoteLight">
        <Placeholder label="Footer below fold" height={50} />
      </Box>
    ),
  },
};

export const DefaultLongPageShouldPushFooterBelowFoldOrganically: Story = {
  name: 'Default - long page (should push footer below fold organically)',
  args: {
    children: (
      <>
        <Placeholder label="Header" height={50} />
        <Placeholder label="Content" height={viewportHeight * 1.2} />
      </>
    ),
    footer: (
      <Box background="promoteLight">
        <Placeholder label="Footer above fold" height={50} />
      </Box>
    ),
  },
};

export const BelowFoldLongPageShouldPushFooterBelowFoldOrganically: Story = {
  name: 'Below fold - long page (should push footer below fold organically)',
  args: {
    children: (
      <>
        <Placeholder label="Header" height={50} />
        <Placeholder label="Content" height={viewportHeight * 1.2} />
      </>
    ),
    footerPosition: 'belowFold',
    footer: (
      <Box background="promoteLight">
        <Placeholder label="Footer" height={50} />
      </Box>
    ),
  },
};
