import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { makeBraidModes } from 'braid-storybook/modes';

import { Box, Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const exampleRows = 3;

const meta: Meta<typeof Tiles> = {
  title: 'Components/Tiles',
  component: Tiles,
  parameters: {
    layout: 'padded',
    chromatic: {
      modes: makeBraidModes({ viewports: ['mobile', 'tablet'] }),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tiles>;

export const OneColumn: Story = {
  name: '1 column',
  render: () => (
    <Tiles space="small" columns={1}>
      {[...new Array(1 * Number(exampleRows))].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const TwoColumns: Story = {
  name: '2 columns',
  render: () => (
    <Tiles space="small" columns={2}>
      {[...new Array(2 * exampleRows)].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const ThreeColumns: Story = {
  name: '3 columns',
  render: () => (
    <Tiles space="small" columns={3}>
      {[...new Array(3 * exampleRows)].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const FourColumns: Story = {
  name: '4 columns',
  render: () => (
    <Tiles space="small" columns={4}>
      {[...new Array(4 * exampleRows)].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const FiveColumns: Story = {
  name: '5 columns',
  render: () => (
    <Tiles space="small" columns={5}>
      {[...new Array(5 * exampleRows)].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const SixColumns: Story = {
  name: '6 columns',
  render: () => (
    <Tiles space="small" columns={6}>
      {[...new Array(6 * exampleRows)].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const ResponsiveColumnsEg1OnMobile4FromTabletUpwards: Story = {
  name: 'Responsive columns (e.g. 1 on mobile, 4 from tablet upwards',
  render: () => (
    <Tiles space="xsmall" columns={[1, 4]}>
      {[...new Array(4 * exampleRows)].map((_, i) => (
        <Placeholder key={i} height={40} />
      ))}
    </Tiles>
  ),
};

export const TestTruncationShouldBeVisibleOnBothTilesBelowAsWellAsBothTilesBeingEquallySized: Story =
  {
    name: 'Test - truncation should be visible on both tiles below, as well as both tiles being equally sized',
    render: () => (
      <Tiles space="small" columns={2}>
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
        <Box>
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
        </Box>
      </Tiles>
    ),
  };
