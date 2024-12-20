import React from 'react';
import type { ComponentScreenshot } from 'site/types';
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
} from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

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
  screenshotWidths: [320, 768, 992, 1200],
  examples: [
    {
      label: 'Basic (Header & Body)',
      Example: () => (
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
    },
    {
      label: 'Row Headings',
      Example: () => (
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
    },
    {
      label: 'Dual axis headings',
      Example: () => (
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
    },
    {
      label: 'Vertical Alignment (center)',
      Example: () => (
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
              <TableHeaderCell align="left">
                <Text>“left”</Text>
              </TableHeaderCell>
              <TableHeaderCell align="center">
                <Text>“center”</Text>
              </TableHeaderCell>
              <TableHeaderCell align="right">
                <Text>“right”</Text>
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
    },
    {
      label: 'Wrapping',
      Example: () => (
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
    },
    {
      label: 'Scroll container fade out',
      Example: () => (
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
    },
    {
      label: 'Column soft widths',
      Example: () => (
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
    },
    {
      label: 'Column maxWidth (without excess space)',
      Example: () => (
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
    },
    {
      label:
        'Column maxWidth (with excess space will allocated additional to max width)',
      Example: () => (
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
    },
    {
      label: 'Column minWidth',
      Example: () => (
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
    },
    {
      label: 'Column spanning (auto widths)',
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
    {
      label: 'Column spanning (soft widths)',
      Example: () => (
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
