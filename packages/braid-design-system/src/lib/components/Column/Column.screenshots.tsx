import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React, { type ComponentProps } from 'react';

import { wireframeModes } from 'braid-storybook/modes';

import { Columns, Column, Box, Stack } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const widths: Array<ComponentProps<typeof Column>['width']> = [
  '1/2',
  '1/3',
  '1/4',
  'content',
];

const meta = {
  title: 'Components/Column',
  component: Column,
  parameters: {
    // screenshotOnlyInWireframe: true,
    chromatic: {
      modes: {
        xsmall: wireframeModes.xsmall,
        small: wireframeModes.small,
        large: wireframeModes.large,
      },
    },
  },
  argTypes: {
    width: {
      control: 'select',
      options: widths,
    },
    hideBelow: {
      control: 'select',
      options: ['mobile', 'tablet', 'desktop'],
    },
    hideAbove: {
      control: 'select',
      options: ['mobile', 'tablet', 'desktop'],
    },
  },
  args: {
    children: <Placeholder height={60} />,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardColumns: Story = {
  name: 'Standard Columns',
  args: {
    children: <Placeholder height={60} />,
  },
  render: (args) => (
    <Columns space="small">
      <Column {...args} />
      <Column {...args} />
      <Column {...args} />
    </Columns>
  ),
};

export const Availablewidths: Story = {
  name: 'Available widths',
  render: () => (
    <Stack space="medium">
      {widths.map((width) => (
        <Columns space="small" key={width}>
          <Column width={width}>
            <Placeholder height={60} label={width} />
          </Column>
          <Column>
            <Placeholder height={60} label="Fluid" />
          </Column>
        </Columns>
      ))}
    </Stack>
  ),
  args: {},
};

export const Gutteralign: Story = {
  name: 'Gutter align',
  render: () => (
    <Stack space="medium">
      <Columns space="small">
        <Column>
          <Placeholder height={60} label="Fluid" />
        </Column>
        <Column>
          <Placeholder height={60} label="Fluid" />
        </Column>
      </Columns>

      <Columns space="small">
        <Column width="1/2">
          <Placeholder height={60} label="&#189;" />
        </Column>
        <Column>
          <Placeholder height={60} label="Fluid" />
        </Column>
      </Columns>

      <Columns space="small">
        <Column width="1/2">
          <Placeholder height={60} label="&#189;" />
        </Column>
        <Column width="1/2">
          <Placeholder height={60} label="&#189;" />
        </Column>
      </Columns>

      <Columns space="small">
        <Column width="1/4">
          <Placeholder height={60} label="&#188;" />
        </Column>
        <Column width="1/4">
          <Placeholder height={60} label="&#188;" />
        </Column>
        <Column>
          <Placeholder height={60} label="Fluid" />
        </Column>
      </Columns>

      <Columns space="small">
        <Column width="1/3">
          <Placeholder height={60} label="&#8531;" />
        </Column>
        <Column width="1/4">
          <Placeholder height={60} label="&#188;" />
        </Column>
        <Column width="content">
          <Placeholder height={60} label="Content" />
        </Column>
      </Columns>

      <Columns space="small" collapseBelow="tablet" reverse>
        <Column width="1/3">
          <Placeholder height={60} label="&#8531;" />
        </Column>
        <Column width="1/4">
          <Placeholder height={60} label="&#188;" />
        </Column>
        <Column width="content">
          <Placeholder height={60} label="Content" />
        </Column>
      </Columns>
    </Stack>
  ),
  args: {},
};

export const Fullheightcolumnwherecolumnwithshortercontenthasspecifiedwidth: Story =
  {
    name: 'Full height column, where column with shorter content has specified width',
    render: () => (
      <Stack space="medium">
        {widths.map((width) => (
          <Columns space="small" key={width}>
            <Column width={width}>
              <Box height="full" background="brandAccent">
                <Placeholder height={40} label={width} />
              </Box>
            </Column>
            <Column>
              <Box height="full">
                <Placeholder height={100} label="Fluid" />
              </Box>
            </Column>
          </Columns>
        ))}
      </Stack>
    ),
    args: {},
  };

export const Fullheightcolumnwherecolumnwithtallercontenthasspecifiedwidth: Story =
  {
    name: 'Full height column, where column with taller content has specified width',
    render: () => (
      <Stack space="medium">
        {widths.map((width) => (
          <Columns space="small" key={width}>
            <Column width={width}>
              <Box height="full">
                <Placeholder height={100} label={width} />
              </Box>
            </Column>
            <Column>
              <Box height="full" background="brandAccent">
                <Placeholder height={40} label="Fluid" />
              </Box>
            </Column>
          </Columns>
        ))}
      </Stack>
    ),
    args: {},
  };

export const Hidesecondcolumnbelowdesktop: Story = {
  name: 'Hide second column below desktop',
  render: () => (
    <Columns space="small">
      <Column>
        <Placeholder height={60} label="Visible 1" />
      </Column>
      <Column hideBelow="desktop">
        <Placeholder height={60} label="Visible Desktop & above" />
      </Column>
      <Column>
        <Placeholder height={60} label="Visible 3" />
      </Column>
    </Columns>
  ),
  args: {},
};

export const Hidesecondcolumnabovetablet: Story = {
  name: 'Hide second column above tablet',
  render: () => (
    <Columns space="small">
      <Column>
        <Placeholder height={60} label="Visible 1" />
      </Column>
      <Column hideAbove="tablet">
        <Placeholder height={60} label="Visible Mobile & Tablet" />
      </Column>
      <Column>
        <Placeholder height={60} label="Visible 3" />
      </Column>
    </Columns>
  ),
  args: {},
};

export const Hidesecondcolumnbelowtabletwhencollapsed: Story = {
  name: 'Hide second column below tablet when collapsed',
  render: () => (
    <Columns space="small" collapseBelow="tablet">
      <Column>
        <Placeholder height={60} label="Visible 1" />
      </Column>
      <Column hideBelow="tablet">
        <Placeholder
          height={60}
          label="Visible Tablet & above (collapsed below tablet)"
        />
      </Column>
      <Column>
        <Placeholder height={60} label="Visible 3" />
      </Column>
    </Columns>
  ),
  args: {},
};

export const Hidesecondcolumnbelowdesktopandabovemobile: Story = {
  name: 'Hide second column below desktop and above mobile',
  render: () => (
    <Columns space="small">
      <Column>
        <Placeholder height={60} label="Visible 1" />
      </Column>
      <Column hideBelow="desktop" hideAbove="mobile">
        <Placeholder height={60} label="Hidden Tablet Only" />
      </Column>
      <Column>
        <Placeholder height={60} label="Visible 3" />
      </Column>
    </Columns>
  ),
  args: {},
};
