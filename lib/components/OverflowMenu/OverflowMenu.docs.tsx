import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Box,
  OverflowMenu,
  MenuItem,
  MenuItemLink,
  Stack,
  Text,
  TextLink,
} from '../';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI-ARIA Menu Pattern.
        </TextLink>
      </Text>
      <Text>
        Child nodes must be{' '}
        <TextLink href="/components/MenuItem">MenuItem</TextLink>,{' '}
        <TextLink href="/components/MenuItemCheckbox">
          MenuItemCheckbox
        </TextLink>{' '}
        or{' '}
        <TextLink href="/components/MenuItemDivider">MenuItemDivider</TextLink>{' '}
        elements.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      background: 'card',
      Example: ({ handler }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <OverflowMenu label="Options">
            <MenuItem onClick={handler}>Button</MenuItem>
            <MenuItemLink href="#" onClick={handler}>
              Link
            </MenuItemLink>
          </OverflowMenu>
        </Box>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <OverflowMenu label="Options">
          <MenuItem>Option</MenuItem>
          <MenuItem>Option</MenuItem>
        </OverflowMenu>
      ),
    },
  ],
};

export default docs;
