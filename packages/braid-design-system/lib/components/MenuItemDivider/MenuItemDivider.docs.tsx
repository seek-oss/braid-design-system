import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import {
  MenuItemDivider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  Text,
  TextLink,
  Box,
  Inline,
  MenuRenderer,
  IconChevron,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ getState, setState }) =>
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
        </MenuRenderer>
      </Inline>,
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
      <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#menu">
        WAI-ARIA Menu Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'MenuItem',
      description: 'For displaying buttons and links within a menu.',
    },
    {
      name: 'MenuItemCheckbox',
      description: 'For displaying checkboxes within a menu.',
    },
  ],
  additional: [],
};

export default docs;
