import React from 'react';
import type { GalleryComponent } from 'site/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Badge,
  Stack,
  OverflowMenu,
  MenuItem,
} from '..';
import source from '@braid-design-system/source.macro';
import { stripTypeAnyFromCode } from './stripTypeAnyFromCode';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Basic',
      Example: ({ getState, setDefaultState }) =>
        stripTypeAnyFromCode(
          source(
            <>
              {setDefaultState('rows', [
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
              ])}
              <Table label="Table basic example">
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
                  {getState('rows').map((row: any) => (
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
            </>,
          ),
        ),
    },
    {
      label: 'With row headers',
      Example: ({ getState, setDefaultState }) =>
        stripTypeAnyFromCode(
          source(
            <>
              {setDefaultState('rows', [
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
              ])}
              <Table label="Table row headers example">
                <TableBody>
                  {getState('rows').map((row: any) => (
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
            </>,
          ),
        ),
    },
    {
      label: 'With status and actions columns',
      Example: ({ getState, setDefaultState }) =>
        stripTypeAnyFromCode(
          source(
            <>
              {setDefaultState('statusAndActionsData', [
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
              ])}
              <Table label="Status and actions example">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell width="content">
                      <Text>Status</Text>
                    </TableHeaderCell>
                    <TableHeaderCell width="30%">
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
                  {getState('statusAndActionsData').map((row: any) => (
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
                        <OverflowMenu
                          size="small"
                          label="Options"
                          id={`options-${row.column1}`}
                        >
                          <MenuItem>Option</MenuItem>
                          <MenuItem>Option</MenuItem>
                        </OverflowMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>,
          ),
        ),
    },
    {
      label: 'With multi-line cell data and actions',
      Example: ({ getState, setDefaultState }) =>
        stripTypeAnyFromCode(
          source(
            <>
              {setDefaultState('multiLineDataCell', [
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
              ])}
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
                  {getState('multiLineDataCell').map((row: any) => (
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
                        <OverflowMenu
                          size="small"
                          label="Options"
                          id={`options-${row.line1}`}
                        >
                          <MenuItem>Option</MenuItem>
                          <MenuItem>Option</MenuItem>
                        </OverflowMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>,
          ),
        ),
    },
  ],
};
