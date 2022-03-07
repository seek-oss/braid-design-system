import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
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
} from '..';

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
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#menu">
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
      Example: ({ id, getState, toggleState, showToast }) =>
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
              id={id}
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
  ],
};

export default docs;
