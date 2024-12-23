import React from 'react';
import type { Snippets } from '../private/Snippets';
import {
  Text,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Badge,
  ButtonIcon,
  MenuRenderer,
  IconOverflow,
} from '../../playroom/components';
import source from '@braid-design-system/source.macro';
import { MenuItem } from '../MenuItem/MenuItem';
import { Stack } from '../Stack/Stack';
import { stripTypeAnyFromCode } from './stripTypeAnyFromCode';

const state = new Map<string, any>();

function setDefaultState(name: string, data: unknown) {
  state.set(name, data);
}

function getState(name: string) {
  return state.get(name);
}
export const snippets: Snippets = [
  {
    name: 'Basic',
    code: stripTypeAnyFromCode(
      source(
        <>
          {setDefaultState('basicRowData', [
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
              {getState('basicRowData').map((row: any) => (
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
    name: 'With status and actions columns',
    code: stripTypeAnyFromCode(
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
                    <Badge bleedY>{row.status}</Badge>
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
                    <MenuRenderer
                      align="right"
                      offsetSpace="xsmall"
                      trigger={(triggerProps) => (
                        <ButtonIcon
                          icon={<IconOverflow />}
                          label="Options"
                          size="small"
                          variant="transparent"
                          id={`options-${row.column1}`}
                          {...triggerProps}
                        />
                      )}
                    >
                      <MenuItem onClick={() => {}}>Button</MenuItem>
                      <MenuItem onClick={() => {}}>Button</MenuItem>
                    </MenuRenderer>
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
    name: 'With multi-line cell data and actions',
    code: stripTypeAnyFromCode(
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
                    <MenuRenderer
                      align="right"
                      offsetSpace="xsmall"
                      trigger={(triggerProps) => (
                        <ButtonIcon
                          icon={<IconOverflow />}
                          label="Options"
                          size="small"
                          variant="transparent"
                          id={`options-${row.line1}`}
                          {...triggerProps}
                        />
                      )}
                    >
                      <MenuItem onClick={() => {}}>Button</MenuItem>
                      <MenuItem onClick={() => {}}>Button</MenuItem>
                    </MenuRenderer>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>,
      ),
    ),
  },
];
