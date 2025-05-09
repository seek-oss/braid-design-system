import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  Stack,
  IconChevron,
  TextLink,
  Strong,
  Actions,
  Button,
  Dialog,
  IconDelete,
  Inline,
  IconBookmark,
  IconProfile,
  MenuItemDivider,
  Spread,
  Badge,
  List,
} from '..';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Inline space="none">
        <MenuRenderer
          offsetSpace="small"
          trigger={(triggerProps, { open }) => (
            <Box userSelect="none" cursor="pointer" {...triggerProps}>
              <Text>
                Menu{' '}
                <IconChevron
                  direction={open ? 'up' : 'down'}
                  alignY="lowercase"
                />
              </Text>
            </Box>
          )}
        >
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </MenuRenderer>
      </Inline>,
    ),
  description: (
    <Stack space="large">
      <Text>
        This component allows you to attach standard menu interactions to a
        custom trigger element, e.g.{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink> uses
        this internally. This should only be used if standard alternatives
        aren’t suitable.
      </Text>
    </Stack>
  ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/menu/">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'OverflowMenu',
      description: 'For displaying a list of secondary actions.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: (
        <Text>
          The menu is left-aligned by default, but this can be customised via
          the <Strong>align</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="none">
            <MenuRenderer
              align="right"
              offsetSpace="small"
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Right aligned{' '}
                    <IconChevron
                      direction={open ? 'up' : 'down'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </MenuRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Placement',
      description: (
        <Text>
          The menu is placed below the <Strong>trigger</Strong> by default, but
          this can be customised via the <Strong>placement</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="none">
            <MenuRenderer
              placement="top"
              offsetSpace="small"
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Placed on top{' '}
                    <IconChevron
                      direction={open ? 'down' : 'up'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </MenuRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Spacing',
      description: (
        <Text>
          The space between the menu and the trigger element can be customised
          via the <Strong>offsetSpace</Strong> prop, which also accepts
          responsive values, e.g.{' '}
          <Strong>
            {"offsetSpace={{ mobile: 'xsmall', tablet: 'small' }}"}
          </Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="none">
            <MenuRenderer
              offsetSpace={{ mobile: 'xsmall', tablet: 'small' }}
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Custom space{' '}
                    <IconChevron
                      direction={open ? 'up' : 'down'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </MenuRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Sizes',
      description: (
        <Text>
          You can customise the size of the menu via the <Strong>size</Strong>{' '}
          prop, which accepts either <Strong>standard</Strong> or{' '}
          <Strong>small</Strong>. When using a small trigger,{' '}
          <Strong>small</Strong> menus are recommended.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Inline space="none">
              <MenuRenderer
                offsetSpace="small"
                trigger={(triggerProps, { open }) => (
                  <Box userSelect="none" cursor="pointer" {...triggerProps}>
                    <Text>
                      Standard trigger{' '}
                      <IconChevron
                        direction={open ? 'up' : 'down'}
                        alignY="lowercase"
                      />
                    </Text>
                  </Box>
                )}
              >
                <MenuItem onClick={() => {}}>Button</MenuItem>
                <MenuItemLink href="#">Link</MenuItemLink>
              </MenuRenderer>
            </Inline>
            <Inline space="none">
              <MenuRenderer
                size="small"
                offsetSpace="xsmall"
                trigger={(triggerProps, { open }) => (
                  <Box userSelect="none" cursor="pointer" {...triggerProps}>
                    <Text size="small">
                      Small trigger{' '}
                      <IconChevron
                        direction={open ? 'up' : 'down'}
                        alignY="lowercase"
                      />
                    </Text>
                  </Box>
                )}
              >
                <MenuItem onClick={() => {}}>Button</MenuItem>
                <MenuItemLink href="#">Link</MenuItemLink>
              </MenuRenderer>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Width',
      description: (
        <>
          <Text>
            The <Strong>width</Strong> prop can be used to control the width of
            the menu. By default, it is set to <Strong>content</Strong> growing
            to the length of the longest menu item.
          </Text>
          <Text>
            Alternatively, choose from <Strong>small</Strong>,{' '}
            <Strong>medium</Strong> or <Strong>large</Strong> which are ratios
            of the{' '}
            <TextLink href="/css/vars#vars.contentwidth">contentWidth</TextLink>{' '}
            scale for the selected theme.
          </Text>
        </>
      ),
      Example: ({ setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('width', 'content')}
            <Inline space="none">
              <MenuRenderer
                offsetSpace="small"
                width={getState('width')}
                trigger={(triggerProps, { open }) => (
                  <Box userSelect="none" cursor="pointer" {...triggerProps}>
                    <Text>
                      Menu width: <Strong>{getState('width')}</Strong>{' '}
                      <IconChevron
                        direction={open ? 'up' : 'down'}
                        alignY="lowercase"
                      />
                    </Text>
                  </Box>
                )}
              >
                <MenuItem onClick={() => setState('width', 'content')}>
                  Content
                </MenuItem>
                <MenuItem onClick={() => setState('width', 'small')}>
                  Small
                </MenuItem>
                <MenuItem onClick={() => setState('width', 'medium')}>
                  Medium
                </MenuItem>
                <MenuItem onClick={() => setState('width', 'large')}>
                  Large
                </MenuItem>
              </MenuRenderer>
            </Inline>
          </>,
        ),
    },
    {
      label: 'Destructive actions',
      description: (
        <Text>
          For destructive actions like “Delete” you can set the menu item’s{' '}
          <Strong>tone</Strong> to <Strong>critical.</Strong> When using this
          feature, you may want to consider providing a confirmation via a{' '}
          <TextLink href="/components/Dialog">Dialog.</TextLink>
        </Text>
      ),
      Example: ({ getState, toggleState, showToast }) =>
        source(
          <>
            <Inline space="none">
              <MenuRenderer
                offsetSpace="small"
                trigger={(triggerProps, { open }) => (
                  <Box userSelect="none" cursor="pointer" {...triggerProps}>
                    <Text>
                      Menu{' '}
                      <IconChevron
                        direction={open ? 'up' : 'down'}
                        alignY="lowercase"
                      />
                    </Text>
                  </Box>
                )}
              >
                <MenuItem
                  onClick={() => toggleState('confirm')}
                  tone="critical"
                >
                  Delete
                </MenuItem>
              </MenuRenderer>
            </Inline>
            <Dialog
              width="content"
              title="Delete item?"
              open={getState('confirm')}
              onClose={() => toggleState('confirm')}
            >
              <Stack space="large">
                <Text tone="secondary">
                  Are you sure you want to delete this item?
                </Text>
                <Actions>
                  <Button
                    tone="critical"
                    onClick={() => {
                      toggleState('confirm');
                      showToast({
                        tone: 'positive',
                        message: 'Item successfully deleted',
                        key: 'itemDeleted',
                      });
                    }}
                  >
                    <IconDelete /> Delete
                  </Button>
                  <Button
                    variant="transparent"
                    onClick={() => toggleState('confirm')}
                  >
                    Cancel
                  </Button>
                </Actions>
              </Stack>
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Using icons in the menu',
      description: (
        <Text>
          When using{' '}
          <TextLink href="/components/MenuItem#inserting-an-icon">
            menu items with icons
          </TextLink>
          , you may find that not all of them have or need one. In order to
          maintain a uniform alignment across all the menu items, you can
          provide the <Strong>reserveIconSpace</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="none">
            <MenuRenderer
              reserveIconSpace
              offsetSpace="small"
              width="small"
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Reserved icon space{' '}
                    <IconChevron
                      direction={open ? 'up' : 'down'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItem onClick={() => {}} icon={<IconProfile />}>
                Item
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Item
              </MenuItem>
              <MenuItemDivider />
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </MenuRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Menu interactions',
      description: (
        <>
          <Text>
            The menu accepts both an <Strong>onOpen</Strong> and an{' '}
            <Strong>onClose</Strong> function.
          </Text>
          <Stack space="medium">
            <Text>The onClose function receives the following data:</Text>
            <List>
              <Text>
                <Strong>reason:</Strong> &ldquo;exit&rdquo; or
                &ldquo;selection&rdquo;
              </Text>
              <Text>
                <Strong>index:</Strong> the index of the selected menu item
              </Text>
              <Text>
                <Strong>id:</Strong> the id of the selected menu item as
                provided to the <Strong>MenuItem</Strong> component itself.
              </Text>
            </List>
          </Stack>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('closeReason', {})}
            {setDefaultState('action', '')}

            <Spread space="large">
              <MenuRenderer
                offsetSpace="small"
                width="small"
                onOpen={() => {
                  setState('action', 'open');
                  setState('closeReason', {});
                }}
                onClose={(closeReason) => {
                  setState('action', 'close');
                  setState('closeReason', closeReason);
                }}
                trigger={(triggerProps, { open }) => (
                  <Box userSelect="none" cursor="pointer" {...triggerProps}>
                    <Text>
                      Menu{' '}
                      <IconChevron
                        direction={open ? 'up' : 'down'}
                        alignY="lowercase"
                      />
                    </Text>
                  </Box>
                )}
              >
                <MenuItem onClick={() => {}}>Item 1</MenuItem>
                <MenuItem onClick={() => {}}>Item 2</MenuItem>
                <MenuItem onClick={() => {}}>Item 3</MenuItem>
              </MenuRenderer>
              <Inline space="small" collapseBelow="tablet">
                {getState('action') ? (
                  <Badge
                    tone="info"
                    weight="strong"
                    bleedY
                  >{`Action: ${getState('action')}`}</Badge>
                ) : null}
                {getState('closeReason').reason ? (
                  <Badge tone="info" bleedY>
                    {`Reason: ${getState('closeReason').reason}`}
                  </Badge>
                ) : null}
                {typeof getState('closeReason').index !== 'undefined' ? (
                  <Badge tone="info" bleedY>
                    {`Selected index: ${getState('closeReason').index}`}
                  </Badge>
                ) : null}
                {getState('closeReason').id ? (
                  <Badge tone="info" bleedY>
                    {`Selected ID: ${getState('closeReason').id}`}
                  </Badge>
                ) : null}
              </Inline>
            </Spread>
          </>,
        ),
    },
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            The <Strong>trigger</Strong> element must accept generic DOM
            properties including event handlers and aria properties.
          </Text>
          <Text>
            Child nodes must be{' '}
            <TextLink href="/components/MenuItem">MenuItem</TextLink>,{' '}
            <TextLink href="/components/MenuItemCheckbox">
              MenuItemCheckbox
            </TextLink>{' '}
            or{' '}
            <TextLink href="/components/MenuItemDivider">
              MenuItemDivider
            </TextLink>{' '}
            elements.
          </Text>
        </>
      ),
    },
    dataAttributeDocs({
      code: `
        <MenuRenderer
          data={{ testid: 'menu-1' }}
          // => data-testid="menu-1"
        >
          ...
        </MenuRenderer>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
