import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  OverflowMenu,
  MenuItem,
  MenuItemLink,
  Stack,
  Text,
  TextLink,
  Strong,
  List,
  Box,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['MenuItemLink'],
  screenshotWidths: [],
  migrationGuide: true,
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI-ARIA Menu Pattern.
        </TextLink>
      </Text>
      <Text>
        For use within menu components, e.g.{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
      </Text>
      <Text>Two semantic variants are provided:</Text>
      <List>
        <Text>
          <Strong>MenuItem</Strong> which renders a button.
        </Text>
        <Text>
          <Strong>MenuItemLink</Strong> which renders a link using the{' '}
          <Strong>linkComponent</Strong> implementation from{' '}
          <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
        </Text>
      </List>
      <Text>
        All semantic variants can be used interchangeably within a single menu.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Standard usage',
      background: 'card',
      Example: ({ handler }) => (
        <Box paddingLeft="xxlarge">
          <OverflowMenu label="Options">
            <MenuItem onClick={handler}>Button</MenuItem>
            <MenuItemLink onClick={handler} href="#">
              Link
            </MenuItemLink>
          </OverflowMenu>
        </Box>
      ),
    },
  ],
};

export default docs;
