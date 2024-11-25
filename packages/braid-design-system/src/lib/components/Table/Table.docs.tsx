import React from 'react';
import type { ComponentDocs } from 'site/types';
import {
  Card,
  HiddenVisually,
  Notice,
  Stack,
  Strong,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  TextLink,
  Tiles,
} from '../';
import source from '@braid-design-system/source.macro';
import { Placeholder } from '../private/Placeholder/Placeholder';
// import { LinkableHeading } from '@braid-design-system/docs-ui';
// import { DocExample } from 'site/App/DocNavigation/DocExample';

const docs: ComponentDocs = {
  category: 'Layout',
  Example: () =>
    source(
      <Table label="Table hero example">
        <TableHeader>
          <TableCell>
            <Text>Lorem</Text>
          </TableCell>
          <TableCell>
            <Text>Ipsum</Text>
          </TableCell>
          <TableCell>
            <Text>Dolor</Text>
          </TableCell>
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
        , primarily supporting the{' '}
        <TextLink href="https://www.w3.org/WAI/tutorials/tables/one-header/">
          Tables with One Header
        </TextLink>{' '}
        and{' '}
        <TextLink href="https://www.w3.org/WAI/tutorials/tables/two-header/">
          Tables with Two Headers
        </TextLink>{' '}
        use cases.
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
        <Text>
          A <Strong>Table</Strong> must include a <Strong>TableBody</Strong>{' '}
          with one or more <Strong>TableRow</Strong> components, with each
          containing <Strong>TableCell</Strong> components that represent each
          column of the tabular data.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) => {
        const { code, value } = source(
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
            <Table label="Table data example">
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
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
        );

        return {
          code: code.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value,
        };
      },
    },
    {
      label: 'Column headings',
      description: (
        <Text>
          A <Strong>TableHeader</Strong> component can be placed before the{' '}
          <Strong>TableBody</Strong>, providing a header row that defaults all{' '}
          <Strong>TableCell</Strong> components inside to be{' '}
          <TextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th">
            table header elements
          </TextLink>{' '}
          with relevant styling.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) => {
        const { code, value } = source(
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
                <TableCell>
                  <Text>Lorem</Text>
                </TableCell>
                <TableCell>
                  <Text>Ipsum</Text>
                </TableCell>
                <TableCell>
                  <Text>Dolor</Text>
                </TableCell>
              </TableHeader>
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
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
        );

        return {
          code: code.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value,
        };
      },
    },
    {
      label: 'Row headings',
      description: (
        <Text>
          Row-level headings are supported by specifying the{' '}
          <Strong>header</Strong> prop on the <Strong>TableCell</Strong>{' '}
          component.
        </Text>
      ),
      Example: ({ setDefaultState, getState }) => {
        const { code, value } = source(
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
            <Table label="Table row headings example">
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
                    <TableCell header>
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
        );

        return {
          code: code.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value,
        };
      },
    },
    {
      description: (
        <>
          <Text>
            This may be combined with{' '}
            <TextLink href="#column-headings">column headings</TextLink> to
            achieve two-dimensional table headers.
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
      Example: ({ setDefaultState, getState }) => {
        const { code, value } = source(
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
                <TableCell>
                  <HiddenVisually>Time</HiddenVisually>
                </TableCell>
                <TableCell>
                  <Text>Lorem</Text>
                </TableCell>
                <TableCell>
                  <Text>Ipsum</Text>
                </TableCell>
                <TableCell>
                  <Text>Dolor</Text>
                </TableCell>
              </TableHeader>
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
                    <TableCell header>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>,
        );

        return {
          code: code.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value,
        };
      },
    },
    {
      label: 'Column widths',
      description: (
        <>
          <Text>
            By default, the table will follow the The width of columns can be
            configured using the <Strong>columnWidths</Strong> prop on{' '}
            <Strong>Table</Strong>. The prop accepts an array of values, each
            representing the width of a column.
          </Text>
          <Text>
            Supported values are <Strong>content</Strong> (default) and{' '}
            <Strong>auto</Strong>.
          </Text>

          <Notice tone="critical">
            <Text>WIP...</Text>
          </Notice>

          {/* DOCUMENT AND DEMO */}
        </>
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
                  <TableCell>
                    <Text>Lorem</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Ipsum</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Dolor</Text>
                  </TableCell>
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
                  <TableCell>
                    <Text>Lorem</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Ipsum</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Dolor</Text>
                  </TableCell>
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
            components.
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
      Example: ({ setDefaultState, getState }) => {
        const { code, value } = source(
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
                <TableCell align="left">
                  <Text>“left”</Text>
                </TableCell>
                <TableCell align="center">
                  <Text>“center”</Text>
                </TableCell>
                <TableCell align="right">
                  <Text>“right”</Text>
                </TableCell>
              </TableHeader>
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
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
        );

        return {
          code: code.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value,
        };
      },
    },
    {
      label: 'Wrapping',
      description: (
        <>
          <Text>
            By default, all <Strong>TableCell</Strong> components are prevented
            from wrapping their content. This keep rows a consistent height and
            means the content can influence the column width.
          </Text>
          <Text>
            If desired, wrapping can be enabled by setting the{' '}
            <Strong>wrap</Strong> prop to <Strong>true</Strong> on a per-cell
            basis.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState }) =>
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
            <Table label="Column visibility example">
              <TableHeader>
                <TableCell>
                  <Text>Lorem</Text>
                </TableCell>
                <TableCell>
                  <Text>Ipsum</Text>
                </TableCell>
                <TableCell>
                  <Text>Dolor</Text>
                </TableCell>
              </TableHeader>
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
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
                    <TableCell>
                      <Text>Lorem</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Ipsum</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Dolor</Text>
                    </TableCell>
                  </TableHeader>
                  <TableBody>
                    {getState('rows').map((row: any) => (
                      <TableRow key={row}>
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
                    <TableCell>
                      <Text>Lorem</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Dolor</Text>
                    </TableCell>
                  </TableHeader>
                  <TableBody>
                    {getState('rows').map((row: any) => (
                      <TableRow key={row}>
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

        const { code: codeDemo } = source(
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
                <TableCell>
                  <Text>Lorem</Text>
                </TableCell>
                <TableCell hideBelow="tablet">
                  <Text>Ipsum</Text>
                </TableCell>
                <TableCell>
                  <Text>Dolor</Text>
                </TableCell>
              </TableHeader>
              <TableBody>
                {getState('rows').map((row: any) => (
                  <TableRow key={row}>
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
        );

        return {
          code: codeDemo.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value: visual,
        };
      },
    },
    {
      label: 'Full bleed',
      description: (
        <Text>
          No rounding or side borders, gutter spacing on outer left and right
          {/* DOCUMENT MORE */}
        </Text>
      ),
      Example: ({ setDefaultState, getState }) => {
        const { code, value } = source(
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
            <Card>
              <Stack space="large">
                <Placeholder height={40} />

                <Table label="Full bleed example" fullBleed>
                  <TableHeader>
                    <TableCell>
                      <Text>Lorem</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Ipsum</Text>
                    </TableCell>
                    <TableCell>
                      <Text>Dolor</Text>
                    </TableCell>
                  </TableHeader>
                  <TableBody>
                    {getState('rows').map((row: any) => (
                      <TableRow key={row}>
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

                <Placeholder height={40} />
              </Stack>
            </Card>
          </>,
        );

        return {
          code: code.replaceAll(': any', '').replaceAll(' key={row}', ''),
          value,
        };
      },
    },
  ],
};

export default docs;
