import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import {
  MenuItem,
  MenuItemLink,
  Text,
  TextLink,
  Strong,
  List,
  Box,
  Dialog,
  Stack,
  Actions,
  Button,
  IconDelete,
  Badge,
  Alert,
  MenuRenderer,
  IconChevron,
  IconProfile,
  IconBookmark,
  Inline,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['MenuItemLink'],
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
    <Text>
      For use within menu components, e.g.{' '}
      <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
      <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
    </Text>
  ),
  alternatives: [
    {
      name: 'MenuItemCheckbox',
      description: 'For displaying checkboxes within a menu.',
    },
    {
      name: 'MenuItemDivider',
      description: 'For creating groups within a menu.',
    },
  ],
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#menu">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  additional: [
    {
      label: 'Semantic variants',
      description: (
        <>
          <Text>
            You can choose between semantic links and buttons via the following
            components:
          </Text>
          <List>
            <Text>
              <Strong>MenuItem</Strong> which renders a button.
            </Text>
            <Text>
              <Strong>MenuItemLink</Strong> which renders a link, using the{' '}
              <Strong>linkComponent</Strong> implementation from{' '}
              <TextLink href="/components/BraidProvider">
                BraidProvider
              </TextLink>
              .
            </Text>
          </List>
          <Text>
            All semantic variants can be used interchangeably within a single
            menu.
          </Text>
        </>
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
                      Menu <IconChevron direction={open ? 'up' : 'down'} />
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
      label: 'Inserting an icon',
      description: (
        <>
          <Text>
            For decoration and help distinguishing between menu items, an{' '}
            <Strong>icon</Strong> can be provided. This will be placed to the
            left of the text.
          </Text>
          <Alert>
            <Text>
              When icons are provided for only some menu items, it is
              recommended that you apply the{' '}
              <TextLink href="/components/MenuRenderer#using-icons-in-the-menu">
                reserveIconSpace
              </TextLink>{' '}
              prop to the menu to preserve the alignment.
            </Text>
          </Alert>
        </>
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
                    Menu <IconChevron direction={open ? 'up' : 'down'} />
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
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </MenuRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Badge support',
      description: (
        <Text>
          Add a <TextLink href="/components/Badge">Badge</TextLink> alongside
          the label of the menu item using the <Strong>badge</Strong> prop.
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="none">
            <MenuRenderer
              offsetSpace="small"
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Menu <IconChevron direction={open ? 'up' : 'down'} />
                  </Text>
                </Box>
              )}
            >
              <MenuItem
                onClick={() => {}}
                badge={
                  <Badge tone="promote" weight="strong">
                    Badge
                  </Badge>
                }
              >
                Item
              </MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </MenuRenderer>
          </Inline>,
        ),
    },
  ],
};

export default docs;
