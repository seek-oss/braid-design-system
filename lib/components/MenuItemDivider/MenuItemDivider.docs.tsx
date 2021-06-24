import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import {
  OverflowMenu,
  MenuItemDivider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  Text,
  TextLink,
  Box,
  List,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ getState, setState }) =>
    source(
      <Box style={{ paddingLeft: 200 }}>
        <OverflowMenu label="Options">
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#" onClick={() => {}}>
            Link
          </MenuItemLink>
          <MenuItemDivider />
          <MenuItemCheckbox
            checked={getState('checked1')}
            onChange={setState('checked1')}
          >
            Checkbox
          </MenuItemCheckbox>
          <MenuItemCheckbox
            checked={getState('checked2')}
            onChange={setState('checked2')}
          >
            Checkbox
          </MenuItemCheckbox>
          <MenuItemCheckbox
            checked={getState('checked3')}
            onChange={setState('checked3')}
          >
            Checkbox
          </MenuItemCheckbox>
        </OverflowMenu>
      </Box>,
    ),
  description: (
    <Text>
      Used to separate groups within menu components, e.g.{' '}
      <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
      <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
    </Text>
  ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [],
  additional: [
    {
      label: 'See also',
      description: (
        <List space="large">
          <Text tone="secondary">
            <TextLink href="/components/MenuItem">MenuItem</TextLink> &mdash;
            For displaying buttons and links within a menu.
          </Text>
          <Text tone="secondary">
            <TextLink href="/components/MenuItemCheckbox">
              MenuItemCheckbox
            </TextLink>{' '}
            &mdash; For displaying checkboxes within a menu.
          </Text>
        </List>
      ),
    },
  ],
};

export default docs;
