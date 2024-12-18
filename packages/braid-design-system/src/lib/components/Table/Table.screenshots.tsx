import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import {
  Badge,
  Box,
  ButtonIcon,
  HiddenVisually,
  IconEdit,
  Stack,
  Strong,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeadCell,
  TableHeader,
  TableRow,
  Text,
} from '../';

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

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Basic (Header & Body)',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell>
                <Text>Lorem</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Ipsum</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Dolor</Text>
              </TableHeadCell>
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
    },
    {
      label: 'Body only',
      Example: () => (
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
    },
    {
      label: 'All sections (Header, Body & Footer)',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell>
                <Text>Lorem</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Ipsum</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Dolor</Text>
              </TableHeadCell>
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
    },
    {
      label: 'Row Headings',
      Example: () => (
        <Table label="Label">
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableHeadCell>
                  <Text>{row.column1}</Text>
                </TableHeadCell>
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
    },
    {
      label: 'Dual axis headings',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell>
                <HiddenVisually>Time</HiddenVisually>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Lorem</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Ipsum</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Dolor</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.time}>
                <TableHeadCell>
                  <Text>{row.time}</Text>
                </TableHeadCell>
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
    },
    {
      label: 'Vertical Alignment (center)',
      Example: () => (
        <Table label="Label" alignY="center">
          <TableHeader>
            <TableRow>
              <TableHeadCell>
                <Text>Lorem</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Ipsum</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Dolor</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableCell>
                  <Stack space="small">
                    <Text>{row.column1}</Text>
                    <Text>{row.column1}</Text>
                  </Stack>
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
    },
    {
      label: 'Vertical Alignment (top)',
      Example: () => (
        <Table label="Label" alignY="top">
          <TableHeader>
            <TableRow>
              <TableHeadCell>
                <Text>Lorem</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Ipsum</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Dolor</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableCell>
                  <Stack space="small">
                    <Text>{row.column1}</Text>
                    <Text>{row.column1}</Text>
                  </Stack>
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
    },
    {
      label: 'Horizontal Alignment',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell align="left">
                <Text>“left”</Text>
              </TableHeadCell>
              <TableHeadCell align="center">
                <Text>“center”</Text>
              </TableHeadCell>
              <TableHeadCell align="right">
                <Text>“right”</Text>
              </TableHeadCell>
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
    },
    {
      label: 'Wrapping',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell>
                <Text>Lorem</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Ipsum</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Dolor</Text>
              </TableHeadCell>
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
    },
    {
      label: 'Visibility',
      Example: () => (
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
                <TableHeadCell>
                  <Text>1</Text>
                </TableHeadCell>
                <TableHeadCell hideBelow="desktop">
                  <Text>2</Text>
                </TableHeadCell>
                <TableHeadCell hideAbove="mobile">
                  <Text>3</Text>
                </TableHeadCell>
                <TableHeadCell hideAbove="tablet" hideBelow="wide">
                  <Text>4</Text>
                </TableHeadCell>
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
    },
    {
      label: 'Scroll container fade out',
      Example: () => (
        <Box maxWidth="xsmall">
          <Table label="Label">
            <TableHeader>
              <TableRow>
                <TableHeadCell>
                  <Text>Lorem</Text>
                </TableHeadCell>
                <TableHeadCell>
                  <Text>Ipsum</Text>
                </TableHeadCell>
                <TableHeadCell>
                  <Text>Dolor</Text>
                </TableHeadCell>
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
    },
    {
      label: 'Column soft widths',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell width="content">
                <Text>Content</Text>
              </TableHeadCell>
              <TableHeadCell width="30%">
                <Text>30%</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell width="content" align="right">
                <Text>Content</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableCell width="content">
                  <Badge bleedY>Badge</Badge>
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
                  <ButtonIcon
                    icon={<IconEdit />}
                    label="Edit"
                    size="small"
                    variant="transparent"
                    id={`edit-${row.column1}`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ),
    },
    {
      label: 'Column maxWidth (without excess space)',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell width="content">
                <Text>Content</Text>
              </TableHeadCell>
              <TableHeadCell maxWidth={200}>
                <Text>MaxWidth 200</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell width="content" align="right">
                <Text>Content</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableCell width="content">
                  <Badge bleedY>Badge</Badge>
                </TableCell>
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
                  <ButtonIcon
                    icon={<IconEdit />}
                    label="Edit"
                    size="small"
                    variant="transparent"
                    id={`edit-${row.column1}`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ),
    },
    {
      label:
        'Column maxWidth (with excess space will allocated additional to max width)',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell width="content">
                <Text>Content</Text>
              </TableHeadCell>
              <TableHeadCell maxWidth={200}>
                <Text>MaxWidth 200</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell width="content" align="right">
                <Text>Content</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableCell width="content">
                  <Badge bleedY>Badge</Badge>
                </TableCell>
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
                  <ButtonIcon
                    icon={<IconEdit />}
                    label="Edit"
                    size="small"
                    variant="transparent"
                    id={`edit-${row.column1}`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ),
    },
    {
      label: 'Column minWidth',
      Example: () => (
        <Table label="Label">
          <TableHeader>
            <TableRow>
              <TableHeadCell width="content" minWidth={150}>
                <Text>MinWidth 150</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell>
                <Text>Auto</Text>
              </TableHeadCell>
              <TableHeadCell width="content" align="right">
                <Text>Content</Text>
              </TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.column1}>
                <TableCell width="content" minWidth={150}>
                  <Badge bleedY>Badge</Badge>
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
                  <ButtonIcon
                    icon={<IconEdit />}
                    label="Edit"
                    size="small"
                    variant="transparent"
                    id={`edit-${row.column1}`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ),
    },
    {
      label: 'Column spanning',
      Example: () => (
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
                  excepteur. Incididunt eu anim eu pariatur dolore dolore fugiat
                  qui ipsum tempor ex laborum voluptate sint.
                </Text>
              </TableCell>
              <TableCell>
                <Text>Tempor</Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
    },
  ],
};
