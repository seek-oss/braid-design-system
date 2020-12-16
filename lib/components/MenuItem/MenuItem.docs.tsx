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
