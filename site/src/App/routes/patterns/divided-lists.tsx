import source from '@braid-design-system/source.macro';
import {
  Actions,
  Badge,
  Box,
  Button,
  ButtonIcon,
  Column,
  Columns,
  Divider,
  Heading,
  Hidden,
  IconCopy,
  IconDelete,
  IconEdit,
  IconLocation,
  IconNewWindow,
  IconNotification,
  IconOverflow,
  IconPeople,
  IconPersonAdd,
  IconRefresh,
  IconSearch,
  IconShare,
  IconStatistics,
  Inline,
  List,
  MenuItem,
  MenuRenderer,
  OverflowMenu,
  Spread,
  Stack,
  Text,
  TextLink,
  Tiles,
} from 'braid-design-system';

import type { PatternDocs } from '../../../types';

interface DividedListItem {
  id: string;
  status: 'OPEN' | 'DRAFT' | 'EXPIRED';
  title: string;
  daysRemaining: number;
  numberOfCandidates: number;
  numberOfNewCandidates: number;
  location: string;
}

export const docs: PatternDocs = {
  description: (
    <Text>
      Displays a list of related items separated by dividers, for easy
      scannability.
    </Text>
  ),
  alternatives: [
    {
      name: 'Card',
      description:
        'To provide a summary and entry point to more detailed information',
    },
    {
      name: 'Divider',
      description: 'To separate consecutive list items',
    },
    {
      name: 'bulk-actions',
      section: 'patterns',
      description: 'To apply the same action to multiple list items',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Anatomy',
        description: (
          <>
            <Text>
              A divided list is a layout approach where related items are
              stacked vertically and separated by{' '}
              <TextLink href="/components/Divider">Dividers</TextLink>. Similar
              to <TextLink href="/components/Card">Cards</TextLink>, divided
              lists are highly flexible and can contain many types of content
              including copy, images, calls to action and layout components. The
              examples below use{' '}
              <TextLink href="/components/Columns">Columns</TextLink> to
              organise content in a structured way.
            </Text>
            <Text>A simple 2-column divided list:</Text>
          </>
        ),
        Example: () =>
          source(
            <Stack space="xlarge">
              <Heading level="2">Heading</Heading>
              <Stack space="large">
                <Columns space="small">
                  <Column>
                    <Stack space="small">
                      <Text weight="strong">Strong text lorem ipsum</Text>
                      <Text tone="secondary">
                        Secondary text dolor sit amet
                      </Text>
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
                <Columns space="small">
                  <Column>
                    <Stack space="small">
                      <Text weight="strong">Strong text</Text>
                      <Text tone="secondary">
                        Secondary text consectetur adipiscing
                      </Text>
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
                <Columns space="small">
                  <Column>
                    <Stack space="small">
                      <Text weight="strong">Strong text ipsum</Text>
                      <Text tone="secondary">Secondary text vel odio</Text>
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
              </Stack>
            </Stack>,
          ),
      },
      {
        description: (
          <Text>
            A more detailed, multi-column divided list. This prototype uses
            responsive techniques to hide and reveal content across viewports.
            Open it in Playroom to see it in action.
          </Text>
        ),
        Example: ({ setDefaultState, getState }) =>
          source(
            <>
              {setDefaultState('data', {
                totalCount: 27,
                items: [
                  {
                    id: '74074797',
                    status: 'EXPIRED',
                    title: 'French pastry chef',
                    daysRemaining: 30,
                    numberOfCandidates: 1,
                    numberOfNewCandidates: 0,
                    location: 'Melbourne VIC 3000',
                  },
                  {
                    id: '73724370',
                    status: 'DRAFT',
                    title: 'Certified dog walker',
                    daysRemaining: 17,
                    numberOfCandidates: 0,
                    numberOfNewCandidates: 0,
                    location: 'Melbourne VIC 3000',
                  },
                  {
                    id: '73623480',
                    status: 'OPEN',
                    title: 'Garage door service technician',
                    daysRemaining: 10,
                    numberOfCandidates: 0,
                    numberOfNewCandidates: 0,
                    location: 'Footscray VIC 3011',
                  },
                  {
                    id: '73522480',
                    status: 'OPEN',
                    title: 'Barista',
                    daysRemaining: 7,
                    numberOfCandidates: 2,
                    numberOfNewCandidates: 1,
                    location: 'Melbourne VIC 3000',
                  },
                  {
                    id: '73351681',
                    status: 'EXPIRED',
                    title: 'Toddler wrangler',
                    daysRemaining: 0,
                    numberOfCandidates: 2,
                    numberOfNewCandidates: 0,
                    location: 'Melbourne VIC 3000',
                  },
                  {
                    id: '72435493',
                    status: 'OPEN',
                    title: 'Carpenter',
                    daysRemaining: 25,
                    numberOfCandidates: 1,
                    numberOfNewCandidates: 1,
                    location: 'El Nido Palawan PH',
                  },
                  {
                    id: '71420787',
                    status: 'DRAFT',
                    title: 'Test engineer',
                    daysRemaining: 316,
                    numberOfCandidates: 0,
                    numberOfNewCandidates: 0,
                    location: 'Melbourne VIC 3000',
                  },
                  {
                    id: '71377917',
                    status: 'OPEN',
                    title: 'Jukebox technician',
                    daysRemaining: 0,
                    numberOfCandidates: 2,
                    numberOfNewCandidates: 0,
                    location: 'Thawi Watthana Bangkok TH',
                  },
                ],
              })}
              <Stack space="xlarge">
                <Stack space="medium">
                  <Heading level="2">Heading example</Heading>
                  <Text size="small" tone="secondary">
                    8 lorem ipsum
                  </Text>
                </Stack>
                <Stack component="ul" space="medium">
                  {getState('data').items.map((row: DividedListItem) => (
                    <Stack key={row.id} component="li" space="medium">
                      <Divider />
                      <Columns
                        space="medium"
                        collapseBelow="tablet"
                        alignY="center"
                      >
                        <Column>
                          <Columns
                            space={{
                              mobile: 'small',
                              tablet: 'medium',
                            }}
                            collapseBelow="tablet"
                            alignY="center"
                          >
                            <Column width="content">
                              <Box style={{ width: 110 }}>
                                {
                                  {
                                    OPEN: (
                                      <Badge tone="info" bleedY>
                                        {row.daysRemaining} days left
                                      </Badge>
                                    ),
                                    DRAFT: (
                                      <Badge tone="caution" bleedY>
                                        Draft
                                      </Badge>
                                    ),
                                    EXPIRED: (
                                      <Badge tone="neutral" bleedY>
                                        Expired
                                      </Badge>
                                    ),
                                  }[row.status]
                                }
                              </Box>
                            </Column>
                            <Column>
                              <Spread space="small" alignY="center">
                                <Text weight="strong" size="small">
                                  <TextLink href="#">{row.title}</TextLink>
                                </Text>
                                <Hidden above="mobile">
                                  <OverflowMenu label="Options">
                                    <MenuItem icon={<IconRefresh />}>
                                      Refresh
                                    </MenuItem>
                                    <MenuItem icon={<IconEdit />}>
                                      Edit
                                    </MenuItem>
                                    <MenuItem icon={<IconCopy />}>
                                      Copy
                                    </MenuItem>
                                    <MenuItem icon={<IconNewWindow />}>
                                      View job
                                    </MenuItem>
                                    <MenuItem icon={<IconStatistics />}>
                                      View info
                                    </MenuItem>
                                    <MenuItem
                                      icon={<IconLocation />}
                                      badge={<Badge tone="promote">Beta</Badge>}
                                    >
                                      Add locations
                                    </MenuItem>
                                    <MenuItem icon={<IconNotification />}>
                                      Notifications
                                    </MenuItem>
                                    <MenuItem icon={<IconPersonAdd />}>
                                      Team access
                                    </MenuItem>
                                    <MenuItem icon={<IconDelete />}>
                                      Expire
                                    </MenuItem>
                                    <MenuItem icon={<IconShare />}>
                                      Share job
                                    </MenuItem>
                                  </OverflowMenu>
                                </Hidden>
                              </Spread>
                            </Column>
                          </Columns>
                        </Column>
                        <Column hideBelow="desktop" hideAbove="mobile">
                          <Columns
                            space={{
                              mobile: 'small',
                              tablet: 'medium',
                            }}
                            collapseBelow="tablet"
                            alignY="center"
                          >
                            <Column>
                              <Text
                                tone="secondary"
                                size="small"
                                icon={<IconLocation />}
                              >
                                {row.location}
                              </Text>
                            </Column>
                            {row.status !== 'DRAFT' ? (
                              <Column>
                                <Inline space="xsmall" alignY="center">
                                  <Text
                                    size="small"
                                    icon={<IconPeople />}
                                    tone="secondary"
                                  >
                                    <TextLink href="#" weight="weak">
                                      {row.numberOfCandidates} candidate
                                      {row.numberOfCandidates !== 1 ? 's' : ''}
                                    </TextLink>
                                  </Text>
                                  {row.numberOfNewCandidates ? (
                                    <Text tone="positive" size="small">
                                      ({row.numberOfNewCandidates} new)
                                    </Text>
                                  ) : null}
                                </Inline>
                              </Column>
                            ) : null}
                          </Columns>
                        </Column>
                        <Column width="content" hideBelow="tablet">
                          <Box style={{ width: 175 }}>
                            <Inline space="none" alignY="center" align="right">
                              <Columns space="medium" alignY="center">
                                {row.status === 'OPEN' ? (
                                  <Column>
                                    <ButtonIcon
                                      variant="transparent"
                                      icon={<IconSearch />}
                                      label="Find talent"
                                    />
                                  </Column>
                                ) : null}
                                {row.status !== 'DRAFT' ? (
                                  <Column>
                                    <ButtonIcon
                                      variant="transparent"
                                      icon={<IconStatistics />}
                                      label="Ad performance"
                                    />
                                  </Column>
                                ) : null}
                                {row.status === 'DRAFT' ? (
                                  <Column>
                                    <ButtonIcon
                                      variant="transparent"
                                      icon={<IconDelete />}
                                      label="Delete"
                                    />
                                  </Column>
                                ) : null}
                                {row.status !== 'EXPIRED' ? (
                                  <Column>
                                    <ButtonIcon
                                      variant="transparent"
                                      icon={<IconEdit />}
                                      label="Edit"
                                    />
                                  </Column>
                                ) : null}
                                {row.status !== 'DRAFT' ? (
                                  <Column>
                                    <ButtonIcon
                                      variant="transparent"
                                      icon={<IconCopy />}
                                      label="Copy"
                                    />
                                  </Column>
                                ) : null}
                                {row.status !== 'DRAFT' ? (
                                  <Column>
                                    <MenuRenderer
                                      offsetSpace="small"
                                      align="right"
                                      trigger={(triggerProps) => (
                                        <ButtonIcon
                                          variant="transparent"
                                          icon={<IconOverflow />}
                                          label="Options"
                                          {...triggerProps}
                                        />
                                      )}
                                    >
                                      <MenuItem icon={<IconNewWindow />}>
                                        View job
                                      </MenuItem>
                                      <MenuItem icon={<IconStatistics />}>
                                        View Ad Performance
                                      </MenuItem>
                                      <MenuItem
                                        icon={<IconLocation />}
                                        badge={
                                          <Badge tone="promote">Beta</Badge>
                                        }
                                      >
                                        Add locations
                                      </MenuItem>
                                      <MenuItem icon={<IconNotification />}>
                                        Notifications
                                      </MenuItem>
                                      <MenuItem icon={<IconPersonAdd />}>
                                        Team access
                                      </MenuItem>
                                      <MenuItem icon={<IconDelete />}>
                                        Expire
                                      </MenuItem>
                                      <MenuItem icon={<IconShare />}>
                                        Share job
                                      </MenuItem>
                                    </MenuRenderer>
                                  </Column>
                                ) : null}
                              </Columns>
                            </Inline>
                          </Box>
                        </Column>
                      </Columns>
                    </Stack>
                  ))}
                  <Divider />
                </Stack>
              </Stack>
            </>,
          ),
      },
      {
        label: 'Visual guidelines',
        description: (
          <List space="large">
            <Text>
              It&rsquo;s generally recommended to include a heading above the
              divided list.
            </Text>
            <Text>
              When it makes sense, consider including an item count below the
              heading (for example, 26 job ads).
            </Text>
            <Text>
              Display leading and trailing dividers. If the divided list is
              displayed directly below a heading, you may choose to omit the
              leading divider.
            </Text>
            <Text>
              Avoid displaying a column header row, as this will need to be
              hidden on mobile. Instead, label content in place so that it can
              be understood without a header.
            </Text>
          </List>
        ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>Group related content in a logical way.</Text>
            <Text>
              Include relevant actions. A divided list is about helping users
              take action on the appropriate list item.
            </Text>
            <Text>
              On smaller devices, divided lists should collapse into a stack so
              the user can continue to view each item as a whole.
            </Text>
          </List>
        ),
        Example: () =>
          source(
            <Tiles space="xlarge" columns={[1, 2]}>
              <Stack space="small">
                <Text tone="secondary" size="small">
                  On mobile
                </Text>
                <Actions>
                  <Button variant="solid">Solid</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="transparent">Transparent</Button>
                </Actions>
              </Stack>
            </Tiles>,
          ),
      },
      {
        label: 'When to use',
        description: (
          <>
            <Text>Use a divided list:</Text>
            <List space="large">
              <Text>
                to display a group of related items consecutively in an
                organised way
              </Text>
              <Text>
                to allow the user to easily locate an individual item and take
                action on that item
              </Text>
              <Text>
                when it&rsquo;s important for the user to view each list item as
                a whole.
              </Text>
            </List>
            <Text>Don&rsquo;t use a divided list:</Text>
            <List space="large">
              <Text>
                to display a numerical dataset using rows and columns (use a{' '}
                <TextLink href="/components/Table">Table</TextLink> instead)
              </Text>
              <Text>
                to provide a summary and entry point to more detailed
                information (use a{' '}
                <TextLink href="/components/Card">Card</TextLink> instead).
              </Text>
            </List>
          </>
        ),
      },
    ],
  },
};

export default docs;
