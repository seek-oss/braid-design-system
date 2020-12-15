import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { OverflowMenu, MenuItemCheckbox, Text, TextLink, List, Box } from '..';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ getState, setState }) =>
    source(
      <Box style={{ paddingLeft: 200 }}>
        <OverflowMenu label="Checklist">
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
      For use within menu components, e.g.{' '}
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
