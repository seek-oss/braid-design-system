import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { setChromatic } from 'braid-storybook/chromatic';

import {
  Box,
  HiddenVisually,
  Stack,
  Strong,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeaderCell,
  TableHeader,
  TableRow,
  Text,
  Badge,
} from '../';
import { Placeholder } from '../../playroom/components';

const data = [
  {
    column1: 'Sit',
    column2: 'Amet',
    column3: 'Consectetur',
    time: '09:00-10:00',
    longText: 'Id nisi consequat enim exercitation non fugiat ipsum ut ea.',
  },
  {
    column1: 'Adipiscing',
    column2: 'Elit',
    column3: 'Praesent',
    time: '10:00-11:00',
    longText:
      'Incididunt eu anim eu pariatur dolore dolore fugiat qui ipsum tempor ex laborum voluptate sint.',
  },
  {
    column1: 'Semper',
    column2: 'Interdum',
    column3: 'Viverra',
    time: '11:00-12:00',
    longText:
      'Culpa labore minim consectetur ut officia ea ea cupidatat excepteur ipsum.',
  },
];

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet', 'desktop', 'wide'],
    }),
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const BasicHeaderBody: Story = {
  name: 'Basic (Header & Body)',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <Text>Lorem</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Ipsum</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Dolor</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell>
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const BodyOnly: Story = {
  name: 'Body only',
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell>
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const AllSectionsHeaderBodyFooter: Story = {
  name: 'All sections (Header, Body & Footer)',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <Text>Lorem</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Ipsum</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Dolor</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell>
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            <Text>Quis</Text>
          </TableCell>
          <TableCell>
            <Text>Tempor</Text>
          </TableCell>
          <TableCell>
            <Text>Voluptate</Text>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const RowHeadings: Story = {
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableHeaderCell>
              <Text>{row.column1}</Text>
            </TableHeaderCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const DualAxisHeadings: Story = {
  name: 'Dual axis headings',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <HiddenVisually>Time</HiddenVisually>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Lorem</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Ipsum</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Dolor</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.time}>
            <TableHeaderCell>
              <Text>{row.time}</Text>
            </TableHeaderCell>
            <TableCell>
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const VerticalAlignmentCenter: Story = {
  name: 'Vertical Alignment (center)',
  render: () => (
    <Table label="Label" alignY="center">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <Text>Lorem</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Ipsum</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Dolor</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell>
              <Placeholder width="100%" height={70} />
            </TableCell>
            <TableCell>
              <Stack space="small">
                <Text>{row.column2}</Text>
                <Text>{row.column2}</Text>
              </Stack>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const VerticalAlignmentTop: Story = {
  name: 'Vertical Alignment (top)',
  render: () => (
    <Table label="Label" alignY="top">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <Text>Lorem</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Ipsum</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Dolor</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell>
              <Placeholder width="100%" height={70} />
            </TableCell>
            <TableCell>
              <Stack space="small">
                <Text>{row.column2}</Text>
                <Text>{row.column2}</Text>
              </Stack>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const HorizontalAlignment: Story = {
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell align="left">
            <Text>“left“</Text>
          </TableHeaderCell>
          <TableHeaderCell align="center">
            <Text>“center“</Text>
          </TableHeaderCell>
          <TableHeaderCell align="right">
            <Text>“right“</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell align="left">
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell align="center">
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell align="right">
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            <Text>Lorem</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Ipsum</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Dolor</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {data.map((row) => (
            <TableCell wrap key={row.longText}>
              <Text>{row.longText}</Text>
            </TableCell>
          ))}
        </TableRow>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell wrap>
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell wrap>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell wrap>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Visibility: Story = {
  render: () => (
    <Stack space="small">
      <Text size="small">
        Breakpoint:{' '}
        <Box component="span" display={{ tablet: 'none' }}>
          <Strong>Mobile</Strong>, Columns: <Strong>1, 3, 4</Strong>
        </Box>
        <Box
          component="span"
          display={{ mobile: 'none', tablet: 'inline', desktop: 'none' }}
        >
          <Strong>Tablet</Strong>, Columns: <Strong>1, 4</Strong>
        </Box>
        <Box
          component="span"
          display={{ mobile: 'none', desktop: 'inline', wide: 'none' }}
        >
          <Strong>Desktop</Strong>, Columns: <Strong>1, 2</Strong>
        </Box>
        <Box component="span" display={{ mobile: 'none', wide: 'inline' }}>
          <Strong>Wide</Strong>, Columns: <Strong>1, 2, 4</Strong>
        </Box>
      </Text>
      <Table label="Label">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Text>1</Text>
            </TableHeaderCell>
            <TableHeaderCell hideBelow="desktop">
              <Text>2</Text>
            </TableHeaderCell>
            <TableHeaderCell hideAbove="mobile">
              <Text>3</Text>
            </TableHeaderCell>
            <TableHeaderCell hideAbove="tablet" hideBelow="wide">
              <Text>4</Text>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.column1}>
              <TableCell>
                <Text>{row.column1}</Text>
              </TableCell>
              <TableCell hideBelow="desktop">
                <Text>{row.column2}</Text>
              </TableCell>
              <TableCell hideAbove="mobile">
                <Text>{row.column3}</Text>
              </TableCell>
              <TableCell hideAbove="tablet" hideBelow="wide">
                <Text>{row.column3}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  ),
};

export const ScrollContainerFadeout: Story = {
  name: 'Scroll container fade out',
  render: () => (
    <Box maxWidth="xsmall">
      <Table label="Label">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Text>Lorem</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Ipsum</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Dolor</Text>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.column1}>
              <TableCell>
                <Text>{row.column1}</Text>
              </TableCell>
              <TableCell>
                <Text>{row.column2}</Text>
              </TableCell>
              <TableCell>
                <Text>{row.longText}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  ),
};

export const ColumnSoftWidths: Story = {
  name: 'Column soft widths',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell width="content">
            <Text>Content</Text>
          </TableHeaderCell>
          <TableHeaderCell width="30%">
            <Text>30%</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell width="content" align="right">
            <Text>Content</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell width="content">
              <Placeholder width={80} height={10} />
            </TableCell>
            <TableCell width="30%">
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
            <TableCell width="content" align="right">
              <Placeholder width="100%" height={10} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ColumnMaxWidthWithoutExcessSpace: Story = {
  name: 'Column maxWidth (without excess space)',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell maxWidth={200}>
            <Text>MaxWidth 200</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell width="content" align="right">
            <Text>Content</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell maxWidth={200}>
              <Text>{row.longText}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.longText}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.longText}</Text>
            </TableCell>
            <TableCell width="content" align="right">
              <Text>Content</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ColumnMaxWidthWithExcessSpace: Story = {
  name: 'Column maxWidth (with excess space will allocated additional to max width)',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell maxWidth={200}>
            <Text>MaxWidth 200</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell width="content" align="right">
            <Text>Content</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell maxWidth={200}>
              <Text>{row.longText}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
            <TableCell width="content" align="right">
              <Placeholder width="100%" height={10} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ColumnMinWidth: Story = {
  name: 'Column minWidth',
  render: () => (
    <Table label="Label">
      <TableHeader>
        <TableRow>
          <TableHeaderCell width="content" minWidth={150}>
            <Text>MinWidth 150</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell>
            <Text>Auto</Text>
          </TableHeaderCell>
          <TableHeaderCell width="content" align="right">
            <Text>Content</Text>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell width="content" minWidth={150}>
              <Placeholder width={80} height={10} />
            </TableCell>
            <TableCell>
              <Text>{row.longText}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
            <TableCell width="content" align="right">
              <Placeholder width="100%" height={10} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ColumnSpanningAutoWidths: Story = {
  name: 'Column spanning (auto widths)',
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell>
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colspan={2} wrap>
            <Text>
              Culpa labore minim consectetur ut officia ea ea cupidatat
              excepteur. Incididunt eu anim eu pariatur dolore dolore fugiat qui
              ipsum tempor ex laborum voluptate sint.
            </Text>
          </TableCell>
          <TableCell>
            <Text>Tempor</Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ColumnSpanningSoftWidths: Story = {
  name: 'Column spanning (soft widths)',
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell width="30%">
              <Text>{row.column1}</Text>
            </TableCell>
            <TableCell width="30%">
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell width="30%">
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colspan={2} wrap>
            <Text>
              Culpa labore minim consectetur ut officia ea ea cupidatat
              excepteur. Incididunt eu anim eu pariatur dolore dolore fugiat qui
              ipsum tempor ex laborum voluptate sint.
            </Text>
          </TableCell>
          <TableCell>
            <Text>Tempor</Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const BadgeBleedYDefaultTrue: Story = {
  name: 'Badge bleedY (default to true)',
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell width="content">
              <Badge>{row.column1}</Badge>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const BadgeBleedYExplicitFalse: Story = {
  name: 'Badge bleedY (explicit false)',
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell width="content">
              <Badge bleedY={false}>{row.column1}</Badge>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const BadgeBleedYAutoInlineText: Story = {
  name: 'Badge bleedY (auto inline text)',
  render: () => (
    <Table label="Label">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.column1}>
            <TableCell width="content">
              <Text>
                {row.column1}
                <Box component="span" paddingLeft="xsmall">
                  <Badge>{row.column1}</Badge>
                </Box>
              </Text>
            </TableCell>
            <TableCell>
              <Text>{row.column2}</Text>
            </TableCell>
            <TableCell>
              <Text>{row.column3}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
