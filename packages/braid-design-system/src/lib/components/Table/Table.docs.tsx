import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Badge,
  Box,
  ButtonIcon,
  HiddenVisually,
  IconEdit,
  Notice,
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
  TextLink,
  Tiles,
  List,
  Actions,
  Button,
} from '../';
import { palette } from '../../color/palette';
import type { StackProps } from '../Stack/Stack';
import { ScrollContainer } from '../private/ScrollContainer/ScrollContainer';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { stripTypeAnyFromCode } from './stripTypeAnyFromCode';

const opacityForDepth = {
  table: 1,
  section: 0.35,
  row: 0.5,
  cell: 0.7,
} as const;

const TableSection = ({
  name,
  type,
  children,
}: {
  name: string;
  type: keyof typeof opacityForDepth;
  children?: StackProps['children'];
}) => (
  <Box background="customDark" padding="small" position="relative">
    <Box
      position="absolute"
      inset={0}
      borderRadius={type === 'table' ? 'large' : 'standard'}
      style={{
        background: palette.grey[type === 'table' ? 800 : 500],
        opacity: opacityForDepth[type],
      }}
    />
    <Box position="relative">
      <Stack space="small">
        <Text size="small" weight="strong">
          {name}
        </Text>
        {children}
      </Stack>
    </Box>
  </Box>
);

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A structure of rows and columns that allows users to easily view, compare
      and analyse a dataset.
    </Text>
  ),
  subComponents: [
    'TableHeader',
    'TableRow',
    'TableHeaderCell',
    'TableBody',
    'TableCell',
    'TableFooter',
  ],
  Example: () =>
    source(
      <Table label="Table hero example">
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
            <TableCell>
              <Text>Sit</Text>
            </TableCell>
            <TableCell>
              <Text>Amet</Text>
            </TableCell>
            <TableCell>
              <Text>Consectetur</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Adipiscing</Text>
            </TableCell>
            <TableCell>
              <Text>Elit</Text>
            </TableCell>
            <TableCell>
              <Text>Praesent</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Semper</Text>
            </TableCell>
            <TableCell>
              <Text>Interdum</Text>
            </TableCell>
            <TableCell>
              <Text>Viverra</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    ),
  alternatives: [],
  accessibility: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/table/">
          WAI-ARIA Table Pattern
        </TextLink>
        .
      </Text>
      <Text>
        All <Strong>Table</Strong> components require an accessible name
        describing the data represented within. This must be provided using the{' '}
        <Strong>label</Strong> prop.
      </Text>
    </Stack>
  ),
  additional: [
    {
      label: 'Table structure',
      description: (
        <>
          <Text>
            A <Strong>Table</Strong> is made up of three sections:{' '}
            <Strong>TableHeader</Strong>, <Strong>TableBody</Strong> (required)
            and <Strong>TableFooter</Strong>, each section containing one or
            more <Strong>TableRow</Strong> components. Each row is made of up of{' '}
            <Strong>TableCell</Strong> or <Strong>TableHeaderCell</Strong>{' '}
            components representing each column of the data.
          </Text>
        </>
      ),
      background: false,
      code: false,
      playroom: false,
      Example: () =>
        source(
          <ScrollContainer>
            <Box style={{ minWidth: 600 }}>
              <TableSection name="Table" type="table">
                <TableSection name="TableHeader" type="section">
                  <TableSection name="TableRow" type="row">
                    <Tiles space="small" columns={3}>
                      <TableSection name="TableHeaderCell" type="cell" />
                      <TableSection name="TableHeaderCell" type="cell" />
                      <TableSection name="TableHeaderCell" type="cell" />
                    </Tiles>
                  </TableSection>
                </TableSection>
                <TableSection name="TableBody (required)" type="section">
                  <TableSection name="TableRow" type="row">
                    <Tiles space="small" columns={3}>
                      <TableSection name="TableCell" type="cell" />
                      <TableSection name="TableCell" type="cell" />
                      <TableSection name="TableCell" type="cell" />
                    </Tiles>
                  </TableSection>
                </TableSection>
                <TableSection name="TableFooter" type="section">
                  <TableSection name="TableRow" type="row">
                    <Tiles space="small" columns={3}>
                      <TableSection name="TableCell" type="cell" />
                      <TableSection name="TableCell" type="cell" />
                      <TableSection name="TableCell" type="cell" />
                    </Tiles>
                  </TableSection>
                </TableSection>
              </TableSection>
            </Box>
          </ScrollContainer>,
        ),
    },
    {
      label: 'Visual guidelines',
      description: (
        <Stack space="large">
          <List space="large">
            <Text>
              Keep it simple and limit colour usage. Avoid over-styling content
              or displaying unnecessary components within the table. In most
              cases using <TextLink href="/components/Text">Text</TextLink> and{' '}
              <TextLink href="/components/TextLink">TextLink</TextLink> should
              suffice.
            </Text>
            <Text>
              Avoid placing your table inside a bounded box or{' '}
              <TextLink href="/components/Card">Card</TextLink>. Instead, place
              it directly onto the page surface.
            </Text>
            <Text>
              Give each piece of data it&rsquo;s own column, avoid showing
              multiple pieces of data in a single column.
            </Text>
            <Text>Left align textual data and right align numerical data.</Text>
            <Text>Keep column headers short, a few words at most.</Text>
          </List>
        </Stack>
      ),
    },
    {
      label: 'Column headers',
      description: (
        <Text>
          A <Strong>TableHeader</Strong> can be provided containing a{' '}
          <Strong>TableRow</Strong> of <Strong>TableHeaderCell</Strong>{' '}
          components to provide the relevant semantics, column labelling and
          styling.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) =>
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
              <Table label="Table column headings example">
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
      label: 'Row headers',
      description: (
        <Text>
          Row-level headers are supported by providing a{' '}
          <Strong>TableHeaderCell</Strong> within a <Strong>TableRow</Strong> of
          the <Strong>TableBody</Strong> section.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) =>
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
      description: (
        <>
          <Text>
            A table may also combine both{' '}
            <TextLink href="#column-headers">column headers</TextLink> and{' '}
            <TextLink href="#row-headers">row headers</TextLink>.
          </Text>
          <Notice tone="info">
            <Text>
              For empty header cells it is recommended to provide a non-visual
              label for the column using the{' '}
              <TextLink href="/components/HiddenVisually">
                HiddenVisually
              </TextLink>{' '}
              component.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState }) =>
        stripTypeAnyFromCode(
          source(
            <>
              {setDefaultState('rows', [
                {
                  column1: '09:00-10:00',
                  column2: 'Sit',
                  column3: 'Amet',
                  column4: 'Consectetur',
                },
                {
                  column1: '10:00-11:00',
                  column2: 'Adipiscing',
                  column3: 'Elit',
                  column4: 'Praesent',
                },
                {
                  column1: '11:00-12:00',
                  column2: 'Semper',
                  column3: 'Interdum',
                  column4: 'Viverra',
                },
              ])}
              <Table label="Table dual axis heading example">
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
                      <TableCell>
                        <Text>{row.column4}</Text>
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
      label: 'Footers',
      description: (
        <Text>
          A <Strong>TableFooter</Strong> can be provided, containing a{' '}
          <Strong>TableRow</Strong> wrapping <Strong>TableCell</Strong>{' '}
          components, providing the relevant semantics and styling.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) =>
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
              <Table label="Table footer example">
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
            </>,
          ),
        ),
    },
    {
      label: 'Column widths',
      description: (
        <>
          <Text>
            By default, a <Strong>TableCell</Strong> and{' '}
            <Strong>TableHeaderCell</Strong> have a <Strong>width</Strong> of{' '}
            <Strong>auto</Strong>, sizing based on the column&rsquo;s longest
            content and distributing any additional space automatically.
          </Text>

          <Text>
            A cell can be made as small as possible by setting its{' '}
            <Strong>width</Strong> to <Strong>content</Strong> — recommended for
            status and actions columns.
          </Text>

          <Text>
            Alternatively, the distribution of excess space can be weighted by
            providing a percentage value to the <Strong>width</Strong> prop —
            useful for increasing the focus on priority columns.
          </Text>

          <Notice tone="info">
            <Text>
              As column widths are set at a cell level, remember to apply them
              consistently to both the row data <Strong>AND</Strong> the column
              header too.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState }) =>
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
              <Table label="Table column widths example">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell width="content">
                      <Text>&ldquo;content&rdquo;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell width="30%">
                      <Text>&ldquo;30%&rdquo;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <Text>&ldquo;auto&rdquo;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <Text>&ldquo;auto&rdquo;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell width="content" align="right">
                      <Text>&ldquo;content&rdquo;</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getState('rows').map((row: any) => (
                    <TableRow key={row.column1}>
                      <TableCell width="content">
                        <Badge>Badge</Badge>
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
                        />
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
      description: (
        <>
          <Text>
            Additionally, limits can be provided to column widths via the{' '}
            <Strong>minWidth</Strong> and <Strong>maxWidth</Strong> props, which
            accept a number (in pixels).
          </Text>

          <Text>
            The <Strong>minWidth</Strong> prop can be used to prevent a column
            from becoming too small. This is useful for maintaining hierachy
            when there is less available space, i.e. smaller screen sizes.
          </Text>

          <Text>
            The <Strong>maxWidth</Strong> prop is useful for constraining
            columns with long data, ensuring content is truncated when it
            exceeds the specified width. As a convenience when setting a{' '}
            <Strong>maxWidth</Strong>, all <Strong>Text</Strong> components in
            the column will default{' '}
            <TextLink href="/components/Text#limiting-the-number-of-lines">
              maxLines
            </TextLink>{' '}
            to a single line.
          </Text>

          <Notice tone="info">
            <Text>
              If there is additional space to be allocated, a column may expand
              beyond its <Strong>maxWidth</Strong>, unless a{' '}
              <Strong>width</Strong> of <Strong>content</Strong> is provided.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState }) =>
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
                  column1: 'Elit',
                  column2: 'Adipiscing incididunt amet id laborum minim',
                  column3: 'Praesent',
                },
                {
                  column1: 'Semper',
                  column2: 'Interdum',
                  column3: 'Viverra',
                },
              ])}
              <Table label="Table column limits example">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell minWidth={150}>
                      <Text>minWidth=150</Text>
                    </TableHeaderCell>
                    <TableHeaderCell maxWidth={200}>
                      <Text>maxWidth=200</Text>
                    </TableHeaderCell>
                    <TableHeaderCell maxWidth={200} width="content">
                      <Text>maxWidth & width</Text>
                    </TableHeaderCell>
                    <TableHeaderCell width="content" align="right">
                      <Text>&ldquo;content&rdquo;</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getState('rows').map((row: any) => (
                    <TableRow key={row.column1}>
                      <TableCell minWidth={150}>
                        <Text>{row.column1}</Text>
                      </TableCell>
                      <TableCell maxWidth={200}>
                        <Text>{row.column2}</Text>
                      </TableCell>
                      <TableCell maxWidth={200} width="content">
                        <Text>{row.column2}</Text>
                      </TableCell>
                      <TableCell width="content" align="right">
                        <ButtonIcon
                          icon={<IconEdit />}
                          label="Edit"
                          size="small"
                          variant="transparent"
                        />
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
      label: 'Vertical alignment',
      description: (
        <>
          <Text>
            The vertical alignment of content within rows can be configured
            using the <Strong>alignY</Strong> prop on <Strong>Table</Strong>.
          </Text>
          <Text>
            Supported alignments are <Strong>center</Strong> (default) and{' '}
            <Strong>top</Strong>.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" size="small">
                “center”
              </Text>
              <Table label="Vertical align center example" alignY="center">
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
                    <TableCell>
                      <Stack space="small">
                        <Text>Content</Text>
                        <Text>Content</Text>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack space="small">
                        <Text>Content</Text>
                        <Text>Content</Text>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                “top”
              </Text>
              <Table label="Vertical align top example" alignY="top">
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
                    <TableCell>
                      <Stack space="small">
                        <Text>Content</Text>
                        <Text>Content</Text>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Stack space="small">
                        <Text>Content</Text>
                        <Text>Content</Text>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Content</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      description: (
        <>
          <Text>
            The horizontal alignment of content within cells can be configured
            using the <Strong>align</Strong> prop on <Strong>TableCell</Strong>{' '}
            and <Strong>TableHeaderCell</Strong> components.
          </Text>
          <Text>
            Supported alignments are <Strong>left</Strong> (default),{' '}
            <Strong>center</Strong> and <Strong>right</Strong>.
          </Text>
          <Notice tone="info">
            <Text>
              As alignment is set at a cell level, remember to consider the
              alignment of both the row data <Strong>AND</Strong> the column
              header too.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState }) =>
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
              ])}
              <Table label="Horizontal alignment example">
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
                  {getState('rows').map((row: any) => (
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
            </>,
          ),
        ),
    },
    {
      label: 'Wrapping',
      description: (
        <>
          <Text>
            By default, all <Strong>TableCell</Strong> and{' '}
            <Strong>TableHeaderCell</Strong> components are prevented from
            wrapping their content. This keep rows a consistent height and means
            the content can influence the column width.
          </Text>
          <Text>
            If desired, wrapping can be enabled by setting the{' '}
            <Strong>wrap</Strong> prop to <Strong>true</Strong> on a per-cell
            basis.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState }) =>
        stripTypeAnyFromCode(
          source(
            <>
              {setDefaultState('rows', [
                {
                  column1:
                    'Id nisi consequat enim exercitation non fugiat ipsum ut ea.',
                  column2:
                    'Incididunt eu anim eu pariatur dolore dolore fugiat qui ipsum tempor ex laborum voluptate sint.',
                  column3:
                    'Culpa labore minim consectetur ut officia ea ea cupidatat excepteur ipsum.',
                },
                {
                  column1: 'Adipiscing',
                  column2: 'Elit',
                  column3: 'Praesent',
                },
              ])}
              <Table label="Column wrapping example">
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
            </>,
          ),
        ),
    },
    {
      label: 'Column spanning',
      description: (
        <Text>
          Both <Strong>TableCell</Strong> and <Strong>TableHeaderCell</Strong>{' '}
          can span across multiple columns by providing the number of columns
          via the <Strong>colspan</Strong> prop.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) =>
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
              ])}

              <Table label="Column spanning example">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell width="30%">
                      <Text>Lorem</Text>
                    </TableHeaderCell>
                    <TableHeaderCell width="30%">
                      <Text>Ipsum</Text>
                    </TableHeaderCell>
                    <TableHeaderCell width="30%">
                      <Text>Dolor</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getState('rows').map((row: any) => (
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
                        Culpa labore minim consectetur ut officia ea ea
                        cupidatat excepteur.
                      </Text>
                    </TableCell>
                    <TableCell>
                      <Text>Tempor</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </>,
          ),
        ),
    },
    {
      label: 'Column visibility',
      description: (
        <>
          <Text>
            Columns can be hidden responsively using the{' '}
            <Strong>hideBelow</Strong> and/or <Strong>hideAbove</Strong> prop,
            by specifying the name of the breakpoint, e.g.{' '}
            <Strong>hideBelow=&ldquo;tablet&rdquo;</Strong>, on the column
            header.
          </Text>
          <Text>
            Consider the three column table below, applying{' '}
            <Strong>hideBelow=&ldquo;tablet&rdquo;</Strong> to the second column
            header. Three columns will be shown from the <Strong>tablet</Strong>{' '}
            breakpoint upwards, and the second column will be hidden on{' '}
            <Strong>mobile</Strong>.
          </Text>
          <Notice tone="info">
            <Text>
              As visibility is set at a cell level, remember to consider the
              visibility of both the row data <Strong>AND</Strong> the column
              header too.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ setDefaultState, getState }) => {
        const { value: visual } = source(
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
            ])}
            <Tiles space="xlarge" columns={[1, 2]}>
              <Stack space="small">
                <Text tone="secondary" size="small">
                  On “tablet” and above
                </Text>
                <Table label="Column visibility example tablet">
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
              </Stack>
              <Stack space="small">
                <Text tone="secondary" size="small">
                  Below “tablet”
                </Text>
                <Table label="Column visibility example mobile">
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>
                        <Text>Lorem</Text>
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
                          <Text>{row.column3}</Text>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Stack>
            </Tiles>
          </>,
        );

        const { code: codeDemo } = stripTypeAnyFromCode(
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
              ])}
              <Table label="Column visibility example">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>
                      <Text>Lorem</Text>
                    </TableHeaderCell>
                    <TableHeaderCell hideBelow="tablet">
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
                      <TableCell hideBelow="tablet">
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
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'Responsive behaviour',
      description: (
        <>
          <Text>
            Note that tables retain their structure and scroll horizontally on
            smaller devices. This allows users to continue comparing data points
            easily.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState }) => {
        const { value: visual } = source(
          <>
            {setDefaultState('rows', [
              {
                column1: 'Adipiscing',
                column2: 'Elit',
                column3: 'Praesent',
                column4: 'Semper',
                column5: 'Interdum',
                column6: 'Viverra',
              },
              {
                column1: 'Donec',
                column2: 'Libero',
                column3: 'Erat',
                column4: 'Facilisis',
                column5: 'Quis',
                column6: 'Dictum',
              },
              {
                column1: 'Nullam',
                column2: 'Rhoncus',
                column3: 'Tellus',
                column4: 'Vestibulum',
                column5: 'Purus',
                column6: 'Vitae',
              },
            ])}
            <Tiles space="xlarge" columns={[1, 2]}>
              <Stack space="small">
                <Text tone="secondary" size="small">
                  On mobile
                </Text>
                <Table label="Responsive behaviour example">
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
                      <TableHeaderCell>
                        <Text>Sit</Text>
                      </TableHeaderCell>
                      <TableHeaderCell>
                        <Text>Amet</Text>
                      </TableHeaderCell>
                      <TableHeaderCell>
                        <Text>Consectetur</Text>
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
                        <TableCell>
                          <Text>{row.column4}</Text>
                        </TableCell>
                        <TableCell>
                          <Text>{row.column5}</Text>
                        </TableCell>
                        <TableCell>
                          <Text>{row.column6}</Text>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Stack>
            </Tiles>
          </>,
        );

        const { code: codeDemo } = source(
          <>
            <Actions>
              <Button variant="solid">Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="transparent">Transparent</Button>
            </Actions>
          </>,
        );

        return {
          code: codeDemo,
          value: visual,
        };
      },
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Table:</Text>
            <List space="large">
              <Text>
                To display a dataset in a structured way using rows and columns
              </Text>
              <Text>
                To allow users to easily view, compare and analyse a dataset
              </Text>
              <Text>When your dataset is primarily numerical.</Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Table:</Text>
            <List space="large">
              <Text>
                To display a list of items (use a{' '}
                <TextLink href="/components/List">List</TextLink> instead)
              </Text>
              <Text>
                To layout content on a page (use{' '}
                <TextLink href="/foundations/layout">
                  layout components
                </TextLink>{' '}
                instead).
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
    dataAttributeDocs({
      code: `
        <Table
          data={{ testid: 'table-1' }}
          // => data-testid="table-1"
        >
          <TableHeader data={{ testid: 'table-header-1' }}>
            <TableRow data={{ testid: 'table-row-1' }}>
              <TableHeaderCell data={{ testid: 'table-header-cell-1' }}>
                ...
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody data={{ testid: 'table-body-1' }}>
            <TableRow>
              <TableCell data={{ testid: 'table-cell-1' }}>
                ...
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter data={{ testid: 'table-footer-1' }}>
            ...
          </TableFooter>
        </Table>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
