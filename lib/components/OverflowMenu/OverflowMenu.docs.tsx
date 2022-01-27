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
  Box,
  Dialog,
  Stack,
  Actions,
  Button,
  IconDelete,
} from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Box style={{ maxWidth: '100px' }}>
        <OverflowMenu label="Options">
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#" onClick={() => {}}>
            Link
          </MenuItemLink>
        </OverflowMenu>
      </Box>,
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
    { name: 'MenuRenderer', description: 'For custom menu components.' },
  ],
  additional: [
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
            <Box style={{ maxWidth: '100px' }}>
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
      label: 'Development considerations',
      description: (
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
      ),
    },
  ],
};

export default docs;
