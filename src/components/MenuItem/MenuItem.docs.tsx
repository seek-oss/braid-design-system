import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import {
  OverflowMenu,
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
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['MenuItemLink'],
  Example: () =>
    source(
      <Box paddingLeft="xxlarge">
        <OverflowMenu label="Options">
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink onClick={() => {}} href="#">
            Link
          </MenuItemLink>
        </OverflowMenu>
      </Box>,
    ),
  description: (
    <Text>
      For use within menu components, e.g.{' '}
      <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
      <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
    </Text>
  ),
  alternatives: [],
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
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
            <Box paddingLeft="xxlarge">
              <OverflowMenu label="Options">
                <MenuItem
                  onClick={() => toggleState('confirm')}
                  tone="critical"
                >
                  Delete
                </MenuItem>
              </OverflowMenu>
            </Box>
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
      label: 'See also',
      description: (
        <List space="large">
          <Text tone="secondary">
            <TextLink href="/components/MenuItemCheckbox">
              MenuItemCheckbox
            </TextLink>{' '}
            &mdash; For displaying checkboxes within a menu.
          </Text>
          <Text tone="secondary">
            <TextLink href="/components/MenuItemDivider">
              MenuItemDivider
            </TextLink>{' '}
            &mdash; For creating groups within a menu.
          </Text>
        </List>
      ),
    },
  ],
};

export default docs;
