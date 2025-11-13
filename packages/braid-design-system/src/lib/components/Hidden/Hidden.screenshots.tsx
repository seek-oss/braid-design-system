import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { setChromatic } from 'braid-storybook/chromatic';

import { Hidden, Text, Box } from '../';

const meta = {
  title: 'Components/Hidden',
  component: Hidden,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet', 'desktop', 'wide'],
      wireframeOnly: true,
    }),
  },
} satisfies Meta<typeof Hidden>;

export default meta;
type Story = StoryObj<typeof Hidden>;

export const HiddenAlways: Story = {
  name: 'Hidden always',
  render: () => (
    <>
      <Text>The following line is hidden always:</Text>
      <Hidden>
        <Box paddingTop="small">
          <Text>Hidden always.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenBelowTablet: Story = {
  name: 'Hidden below tablet',
  render: () => (
    <>
      <Text>The following line is hidden below tablet:</Text>
      <Hidden below="tablet">
        <Box paddingTop="small">
          <Text>Hidden below tablet.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenBelowDesktop: Story = {
  name: 'Hidden below desktop',
  render: () => (
    <>
      <Text>The following line is hidden below desktop:</Text>
      <Hidden below="desktop">
        <Box paddingTop="small">
          <Text>Hidden below desktop.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenBelowWide: Story = {
  name: 'Hidden below wide',
  render: () => (
    <>
      <Text>The following line is hidden below wide:</Text>
      <Hidden below="wide">
        <Box paddingTop="small">
          <Text>Hidden below wide.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenAboveMobile: Story = {
  name: 'Hidden above mobile',
  render: () => (
    <>
      <Text>The following line is hidden above mobile:</Text>
      <Hidden above="mobile">
        <Box paddingTop="small">
          <Text>Hidden above mobile.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenAboveTablet: Story = {
  name: 'Hidden above tablet',
  render: () => (
    <>
      <Text>The following line is hidden above tablet:</Text>
      <Hidden above="tablet">
        <Box paddingTop="small">
          <Text>Hidden above tablet.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenAboveDesktop: Story = {
  name: 'Hidden above desktop',
  render: () => (
    <>
      <Text>The following line is hidden above desktop:</Text>
      <Hidden above="desktop">
        <Box paddingTop="small">
          <Text>Hidden above desktop.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenOnPrint: Story = {
  name: 'Hidden on print',
  render: () => (
    <>
      <Text>The following line is hidden on print:</Text>
      <Hidden print>
        <Box paddingTop="small">
          <Text>Hidden on print.</Text>
        </Box>
      </Hidden>
    </>
  ),
};

export const HiddenBelowTabletInline: Story = {
  name: 'Hidden below tablet (inline)',
  render: () => (
    <Text>
      The following text node is hidden below tablet:{' '}
      <Hidden below="tablet">Hidden below tablet.</Hidden>
    </Text>
  ),
};

export const HiddenBelowDesktopInline: Story = {
  name: 'Hidden below desktop (inline)',
  render: () => (
    <Text>
      The following text node is hidden below desktop:{' '}
      <Hidden below="desktop">Hidden below desktop.</Hidden>
    </Text>
  ),
};

export const HiddenBelowWideInline: Story = {
  name: 'Hidden below wide (inline)',
  render: () => (
    <Text>
      The following text node is hidden below wide:{' '}
      <Hidden below="wide">Hidden below wide.</Hidden>
    </Text>
  ),
};

export const HiddenAboveMobileInline: Story = {
  name: 'Hidden above mobile (inline)',
  render: () => (
    <Text>
      The following text node is hidden above mobile:{' '}
      <Hidden above="mobile">Hidden above mobile.</Hidden>
    </Text>
  ),
};

export const HiddenAboveTabletInline: Story = {
  name: 'Hidden above tablet (inline)',
  render: () => (
    <Text>
      The following text node is hidden above tablet:{' '}
      <Hidden above="tablet">Hidden above tablet.</Hidden>
    </Text>
  ),
};

export const HiddenAboveDesktopInline: Story = {
  name: 'Hidden above desktop (inline)',
  render: () => (
    <Text>
      The following text node is hidden above desktop:{' '}
      <Hidden above="desktop">Hidden above desktop.</Hidden>
    </Text>
  ),
};

export const HiddenOnPrintInline: Story = {
  name: 'Hidden on print (inline)',
  render: () => (
    <Text>
      The following text node is hidden on print:{' '}
      <Hidden print>Hidden on print.</Hidden>
    </Text>
  ),
};
