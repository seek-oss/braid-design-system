import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  Stack,
  IconChevron,
  TextLink,
  Strong,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [],
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI-ARIA Menu Pattern.
        </TextLink>
      </Text>
      <Text>
        Used to build higher level menu components that adhere to our
        accessibility standards, e.g.{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink> uses
        this internally.
      </Text>
      <Text>
        Implementations of this component must provide a{' '}
        <Strong>trigger</Strong> element that can accept DOM properties
        including event handlers and aria properties used to manage the
        interactions.
      </Text>
      <Text>
        Child nodes must be{' '}
        <TextLink href="/components/MenuItem">
          MenuItem, MenuItemLink, or MenuItemCheckbox
        </TextLink>{' '}
        elements.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      code: dedent`
        <MenuRenderer
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
      `,
      Example: ({ handler }) => (
        <MenuRenderer
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
          <MenuItem onClick={handler}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </MenuRenderer>
      ),
    },
    {
      label: 'Right aligned menu',
      Container: ({ children }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          {children}
        </Box>
      ),
      code: dedent`
        <MenuRenderer
          align="right"
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
      `,
      Example: ({ handler }) => (
        <MenuRenderer
          align="right"
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
          <MenuItem onClick={handler}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </MenuRenderer>
      ),
    },
    {
      label: 'Offset space for menu',
      code: dedent`
        <MenuRenderer
          offsetSpace={['none', 'small']}
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
      `,
      Example: ({ handler }) => (
        <MenuRenderer
          offsetSpace={['none', 'small']}
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
          <MenuItem onClick={handler}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </MenuRenderer>
      ),
    },
  ],
};

export default docs;
