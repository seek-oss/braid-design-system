import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Menu, MenuItem, Text, Stack, IconChevron } from '..';
import { TextLink } from '../TextLink/TextLink';
import { Link } from '../../../site/src/App/Documentation/Link';

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [],
  description: (
    <Stack space="large">
      <Text>
        The `Menu` component is a low level component that can be used to build
        higher level menu components that adhere to the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI Authoring Practices
        </TextLink>
        . For example, the{' '}
        <Link to="/components/OverflowMenu">OverflowMenu</Link> uses this
        internally.
      </Text>
      <Text>
        Implementations of this component must provide a `trigger` that can
        accept DOM properties, in particular event handlers and aria properties
        used to manage the interactions. This trigger should either be, or
        identify as, a `button` element.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      playroom: false,
      Example: ({ handler }) => (
        <Menu
          trigger={(triggerProps, { open }) => (
            <Box component="button" cursor="pointer" {...triggerProps}>
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
          <MenuItem onClick={handler}>First</MenuItem>
          <MenuItem onClick={handler}>Second</MenuItem>
        </Menu>
      ),
    },
    {
      label: 'Right aligned menu',
      playroom: false,
      Container: ({ children }) => (
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          {children}
        </Box>
      ),
      Example: ({ handler }) => (
        <Menu
          align="right"
          trigger={(triggerProps, { open }) => (
            <Box component="button" cursor="pointer" {...triggerProps}>
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
          <MenuItem onClick={handler}>First</MenuItem>
          <MenuItem onClick={handler}>Second</MenuItem>
        </Menu>
      ),
    },
  ],
};

export default docs;
