import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { setChromatic } from 'braid-storybook/chromatic';

import { Box, Tiles } from '../';
import { Placeholder } from '../../playroom/components';

const exampleRows = 3;

const meta: Meta<typeof Tiles> = {
  title: 'Components/Tiles',
  component: Tiles,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet'],
      wireframeOnly: true,
    }),
  },
};

export default meta;
type Story = StoryObj<typeof Tiles>;

export const OneColumn: Story = {
  name: '1 column',
  args: {
    space: 'small',
    columns: 1,
    children: [...new Array(1 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const TwoColumns: Story = {
  name: '2 columns',
  args: {
    space: 'small',
    columns: 2,
    children: [...new Array(2 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const ThreeColumns: Story = {
  name: '3 columns',
  args: {
    space: 'small',
    columns: 3,
    children: [...new Array(3 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const FourColumns: Story = {
  name: '4 columns',
  args: {
    space: 'small',
    columns: 4,
    children: [...new Array(4 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const FiveColumns: Story = {
  name: '5 columns',
  args: {
    space: 'small',
    columns: 5,
    children: [...new Array(5 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const SixColumns: Story = {
  name: '6 columns',
  args: {
    space: 'small',
    columns: 6,
    children: [...new Array(6 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const ResponsiveColumnsEg1OnMobile4FromTabletUpwards: Story = {
  name: 'Responsive columns (e.g. 1 on mobile, 4 from tablet upwards',
  args: {
    space: 'small',
    columns: [1, 4],
    children: [...new Array(4 * Number(exampleRows))].map((_, i) => (
      <Placeholder key={i} height={40} />
    )),
  },
};

export const TestTruncationShouldBeVisibleOnBothTilesBelowAsWellAsBothTilesBeingEquallySized: Story =
  {
    name: 'Test - truncation should be visible on both tiles below, as well as both tiles being equally sized',
    args: {
      space: 'small',
      columns: 2,
      children: [
        <Box
          key="1"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Consequat quis anim anim officia voluptate. Ex in ut ipsum tempor
          occaecat enim laboris ex incididunt sunt non est reprehenderit. Id
          proident deserunt excepteur esse mollit aliquip. Aute ut tempor ex
          officia quis magna occaecat nostrud.
        </Box>,
        <Box key="2">
          <Box
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Consequat quis anim anim officia voluptate. Ex in ut ipsum tempor
            occaecat enim laboris ex incididunt sunt non est reprehenderit. Id
            proident deserunt excepteur esse mollit aliquip. Aute ut tempor ex
            officia quis magna occaecat nostrud.
          </Box>
        </Box>,
      ],
    },
  };
