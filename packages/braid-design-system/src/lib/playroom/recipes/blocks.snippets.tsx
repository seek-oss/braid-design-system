import source from '@braid-design-system/source.macro';

import type { Snippets } from '../../components/private/Snippets';
import {
  Heading,
  PageBlock,
  Stack,
  Strong,
  Text,
  Actions,
  Button,
  Box,
  Card,
  ButtonIcon,
  Column,
  Columns,
  Divider,
  IconEdit,
  ContentBlock,
  Checkbox,
  Dropdown,
  MonthPicker,
  TextField,
  Badge,
  MenuItem,
  OverflowMenu,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Placeholder,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProvider,
} from '../../playroom/components';
import type useScope from '../useScope';

/**
 * Playroom stubs for stateful snippets.
 */
function getState(key: string): unknown {
  return () => key as string;
}
function toggleState(key: string): ReturnType<typeof useScope>['toggleState'] {
  return () => key;
}

export const snippets: Snippets = [
  {
    group: 'Blocks',
    name: 'Standard',
    code: source(
      <PageBlock width="medium">
        <Stack space="large">
          <Stack space="small">
            <Heading level="3">Heading</Heading>

            <Text tone="secondary">
              Subtitle (optional, consider using secondary tone to avoid
              clashing with content below)
            </Text>
          </Stack>

          <Stack space="medium">
            <Text>
              Combines a <Strong>Heading level 3</Strong> with{' '}
              <Strong>large Stack</Strong> spacing content groups within the
              section.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis cursus quam nec volutpat. In hac habitasse platea
              dictumst. Praesent egestas erat id mollis imperdiet. Vestibulum
              non commodo nisi, sed tempus magna. Duis a malesuada diam.
            </Text>
          </Stack>

          <Actions>
            <Button>Action (optional)</Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Card list',
    code: source(
      <PageBlock width="medium">
        <Stack space="large">
          <Heading level="3">Heading (optional)</Heading>

          <Stack component="ul" space="small">
            {[
              {
                title: 'Item 1',
                subTitle: 'Ea proident nulla veniam',
                description: 'Lorem ipsum',
                date: '2d ago',
              },
              {
                title: 'Item 2',
                subTitle: 'Occaecat ad sunt elit',
                description: 'Consectetur adipiscing',
                date: '6d ago',
              },
              {
                title: 'Item 3',
                subTitle: 'Commodo exercitation nisi laborum',
                description: 'Vel odio',
                date: '3w ago',
              },
            ].map((item) => (
              <Box component="li" key={item.title}>
                <Card component="article">
                  <Stack space="medium">
                    <Stack space="small">
                      <Heading level="4">{item.title}</Heading>
                      <Text>{item.subTitle}</Text>
                    </Stack>
                    <Text>{item.description}</Text>
                    <Text tone="secondary">{item.date}</Text>
                  </Stack>
                </Card>
              </Box>
            ))}
          </Stack>

          <Actions>
            <Button>Action (optional)</Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Divided list',
    code: source(
      <PageBlock width="medium">
        <Stack space="large">
          <Heading level="3">Heading (optional)</Heading>

          <Stack space="medium">
            {[
              {
                title: 'Item 1',
                description: 'Lorem ipsum',
              },
              {
                title: 'Item 2',
                description: 'Consectetur adipiscing',
              },
              {
                title: 'Item 3',
                description: 'Vel odio',
              },
            ].map((item) => (
              <>
                <Columns space="small">
                  <Column>
                    <Stack space="small">
                      <Text component="h4" weight="strong">
                        {item.title}
                      </Text>
                      <Text tone="secondary">{item.description}</Text>
                    </Stack>
                  </Column>
                  <Column width="content">
                    <ButtonIcon
                      variant="transparent"
                      icon={<IconEdit />}
                      label="Edit"
                    />
                  </Column>
                </Columns>
                <Divider />
              </>
            ))}
          </Stack>

          <Actions>
            <Button>Action (optional)</Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Branded container',
    description: 'Standard',
    code: source(
      <PageBlock width="medium">
        <Box background="brand" padding="gutter" borderRadius="large">
          <Stack space="large">
            <Heading level="3">Heading</Heading>

            <Text>
              Combines a <Strong>Heading level 3</Strong> with{' '}
              <Strong>large Stack</Strong> spacing content groups within the
              section.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis cursus quam nec volutpat. In hac habitasse platea
              dictumst. Praesent egestas erat id mollis imperdiet. Vestibulum
              non commodo nisi, sed tempus magna. Duis a malesuada diam.
            </Text>
          </Stack>
        </Box>
      </PageBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Branded container',
    description: 'Large',
    code: source(
      <ContentBlock width="large">
        <Box background="brand" padding="xlarge" borderRadius="xlarge">
          <PageBlock width="medium">
            <Stack space="large">
              <Heading level="1">Heading</Heading>

              <Text size="large">
                Combines a <Strong>Heading level 1</Strong> with{' '}
                <Strong>large Text</Strong> in a <Strong>large Stack</Strong>{' '}
                spacing content groups within the section.
              </Text>

              <Text size="large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis cursus quam nec volutpat. In hac habitasse platea
                dictumst. Praesent egestas erat id mollis imperdiet. Vestibulum
                non commodo nisi, sed tempus magna. Duis a malesuada diam.
              </Text>
            </Stack>
          </PageBlock>
        </Box>
      </ContentBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Branded container',
    description: 'Full bleed',
    code: source(
      <Box background="brand" paddingY="xlarge">
        <PageBlock width="medium">
          <Stack space="large">
            <Heading level="2">Heading</Heading>

            <Text>
              Combines a <Strong>Heading level 2</Strong> with{' '}
              <Strong>large Stack</Strong> spacing content groups within the
              section.
              <br />
              Uses <Strong>PageBlock</Strong> inside the section to maintain
              screen gutters on small screens.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis cursus quam nec volutpat. In hac habitasse platea
              dictumst. Praesent egestas erat id mollis imperdiet. Vestibulum
              non commodo nisi, sed tempus magna. Duis a malesuada diam.
            </Text>
          </Stack>
        </PageBlock>
      </Box>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Form (basic)',
    code: source(
      <PageBlock width="medium">
        <Stack space="xlarge">
          <Stack space="small">
            <Heading level="3">Heading</Heading>

            <Text>
              For forms with minimal or no validation as errors will impact
              layout.
            </Text>

            <Text>
              Uses a <Strong>large Stack</Strong> for fields, with an{' '}
              <Strong>xlarge Stack</Strong> separating the actions from the
              form.
            </Text>
          </Stack>

          <Stack space="large">
            <TextField label="TextField" />

            <Dropdown
              label="Dropdown"
              tone={getState('error') ? 'critical' : undefined}
              message={getState('error') ? 'Required field' : undefined}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Dropdown>

            <MonthPicker label="MonthPicker" />

            <Checkbox label="Checkbox" />
          </Stack>

          <Actions>
            <Button>Primary action</Button>
            <Button variant="transparent" onClick={() => toggleState('error')}>
              Toggle error
            </Button>
          </Actions>
        </Stack>
      </PageBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Form (validation)',
    code: source(
      <PageBlock width="medium">
        <Stack space="xlarge">
          <Stack space="medium">
            <Heading level="3">Heading</Heading>

            <Text>
              For forms that are more likely to show validation errors, it is
              recommended to use <Strong>reserveMessageSpace</Strong> to prevent
              the elements shifting when messages appear.
            </Text>

            <Text>
              Uses a <Strong>small Stack</Strong> for fields, with a{' '}
              <Strong>large Stack</Strong> separating the actions from the form.
            </Text>
          </Stack>

          <Stack space="large">
            <Stack space="small">
              <TextField
                label="TextField"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              />

              <Dropdown
                label="Dropdown"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Dropdown>

              <MonthPicker
                label="MonthPicker"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              />

              <Checkbox
                label="Checkbox"
                reserveMessageSpace
                tone={getState('error') ? 'critical' : undefined}
                message={getState('error') ? 'Required field' : undefined}
              />
            </Stack>

            <Actions>
              <Button onClick={() => toggleState('error')}>
                Toggle errors
              </Button>
            </Actions>
          </Stack>
        </Stack>
      </PageBlock>,
    ),
  },
  {
    group: 'Blocks',
    name: 'Table',
    code: source(
      <PageBlock width="medium">
        <Stack space="large">
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
  {
    group: 'Blocks',
    name: 'Tabs',
    code: source(
      <PageBlock width="medium">
        <TabsProvider>
          <Stack space="large">
            <Tabs divider="none" label="Tabs Block">
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>

            <TabPanels>
              <TabPanel>
                <Placeholder label="Tab 1 content" height={500} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Tab 2 content" height={300} />
              </TabPanel>
              <TabPanel>
                <Placeholder label="Tab 3 content" height={400} />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>
      </PageBlock>,
    ),
  },
];
