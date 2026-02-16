import source from '@braid-design-system/source.macro';

import {
  Text,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Badge,
  Stack,
  OverflowMenu,
  MenuItem,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Basic',
    code: source(
      <Table label="Basic table example">
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
          {[
            {
              column1: 'Sit',
              column2: 'Amet',
              column3: 'Consectetur',
            },
            {
              column1: 'Adipiscing',
              column2: 'Elit',
              column3: 'Praesent',
            },
            {
              column1: 'Semper',
              column2: 'Interdum',
              column3: 'Viverra',
            },
          ].map((row) => (
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
      </Table>,
    ),
  },
  {
    description: 'With status and actions columns',
    code: source(
      <Table label="Status and actions example">
        <TableHeader>
          <TableRow>
            <TableHeaderCell width="content">
              <Text>Status</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Data</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Data</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Data</Text>
            </TableHeaderCell>
            <TableHeaderCell width="content" align="right">
              <Text>Actions</Text>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              status: 'Lorem',
              column1: 'Sit',
              column2: 'Amet',
              column3: 'Consectetur',
            },
            {
              status: 'Ipsum',
              column1: 'Adipiscing',
              column2: 'Elit',
              column3: 'Praesent',
            },
            {
              status: 'Dolor',
              column1: 'Semper',
              column2: 'Interdum',
              column3: 'Viverra',
            },
          ].map((row) => (
            <TableRow key={row.column1}>
              <TableCell width="content">
                <Badge>{row.status}</Badge>
              </TableCell>
              <TableCell>
                <Text>{row.column1}</Text>
              </TableCell>
              <TableCell>
                <Text>{row.column2}</Text>
              </TableCell>
              <TableCell>
                <Text>{row.column3}</Text>
              </TableCell>
              <TableCell width="content" align="right">
                <OverflowMenu size="small" label="Options">
                  <MenuItem>Option</MenuItem>
                  <MenuItem>Option</MenuItem>
                </OverflowMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>,
    ),
  },
  {
    description: 'With multi-line cell data and actions',
    code: source(
      <Table label="Multi-line cell data example">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Text>Data</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Data</Text>
            </TableHeaderCell>
            <TableHeaderCell width="content" align="right">
              <Text>Actions</Text>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              line1: 'Sit',
              line2: 'Amet',
              column2: 'Consectetur',
            },
            {
              line1: 'Adipiscing',
              line2: 'Elit',
              column2: 'Praesent',
            },
            {
              line1: 'Semper',
              line2: 'Interdum',
              column2: 'Viverra',
            },
          ].map((row) => (
            <TableRow key={row.line1}>
              <TableCell>
                <Stack space="xsmall">
                  <Text>{row.line1}</Text>
                  <Text>{row.line2}</Text>
                </Stack>
              </TableCell>
              <TableCell>
                <Text>{row.column2}</Text>
              </TableCell>
              <TableCell width="content" align="right">
                <OverflowMenu size="small" label="Options">
                  <MenuItem>Option</MenuItem>
                  <MenuItem>Option</MenuItem>
                </OverflowMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>,
    ),
  },
];
