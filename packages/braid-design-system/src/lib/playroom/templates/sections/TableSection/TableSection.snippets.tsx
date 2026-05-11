import source from '@braid-design-system/source.macro';

import type { TemplateSnippets } from '../../../../components/private/Snippets';
import {
  Badge,
  Heading,
  MenuItem,
  OverflowMenu,
  PageBlock,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from '../../../components';

export const snippets: TemplateSnippets = [
  {
    group: 'Sections',
    name: 'Table Section',
    code: source(
      <PageBlock width="medium">
        <Stack space="medium">
          <Heading level="3">Heading (optional)</Heading>

          <Table label="Table Block">
            <TableHeader>
              <TableRow>
                <TableHeaderCell width="content">
                  <Text>Status</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                  <Text>Data 1</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                  <Text>Data 2</Text>
                </TableHeaderCell>
                <TableHeaderCell>
                  <Text>Data 3</Text>
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
                  data1: 'Sit',
                  data2: 'Amet',
                  data3: 'Consectetur',
                },
                {
                  status: 'Ipsum',
                  data1: 'Adipiscing',
                  data2: 'Elit',
                  data3: 'Praesent',
                },
                {
                  status: 'Dolor',
                  data1: 'Semper',
                  data2: 'Interdum',
                  data3: 'Viverra',
                },
              ].map((row) => (
                <TableRow key={row.data1}>
                  <TableCell width="content">
                    <Badge>{row.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Text>{row.data1}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{row.data2}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{row.data3}</Text>
                  </TableCell>
                  <TableCell width="content" align="right">
                    <OverflowMenu size="small" label="Options">
                      <MenuItem>Option 1</MenuItem>
                      <MenuItem>Option 2</MenuItem>
                    </OverflowMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      </PageBlock>,
    ),
  },
];
