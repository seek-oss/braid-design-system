import React from 'react';
import { ComponentDetails } from '../../../site/src/types';
import { Box, OverflowMenu, MenuItem, MenuItemLink, Text, TextLink } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDetails = {
  category: 'Content',
  Example: () =>
    source(
      <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
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
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    { name: 'MenuRenderer', description: 'For custom menu components.' },
  ],
  additional: [
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
