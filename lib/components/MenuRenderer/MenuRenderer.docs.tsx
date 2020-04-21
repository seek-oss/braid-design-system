import React from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  Text,
  Stack,
  IconChevron,
  TextLink,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [],
  description: (
    <Stack space="large">
      <Text>
        The `MenuRenderer` component is a low level component that can be used
        to build higher level menu components that adhere to the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI Authoring Practices
        </TextLink>
        . For example, the{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink> uses
        this internally.
      </Text>
      <Text>
        Implementations of this component must provide a `trigger` that can
        accept DOM properties, in particular event handlers and aria properties
        used to manage the interactions.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      code: dedent`
        <MenuRenderer
          trigger={(triggerProps, { open }) => (
            <Box {...triggerProps}>
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
          <MenuItem onClick={() => {}}>First</MenuItem>
          <MenuItem onClick={() => {}}>Second</MenuItem>
        </MenuRenderer>
      `,
      Example: ({ handler }) => (
        <MenuRenderer
          trigger={(triggerProps, { open }) => (
            <Box {...triggerProps}>
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
            <Box {...triggerProps}>
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
          <MenuItem onClick={() => {}}>First</MenuItem>
          <MenuItem onClick={() => {}}>Second</MenuItem>
        </MenuRenderer>
      `,
      Example: ({ handler }) => (
        <MenuRenderer
          align="right"
          trigger={(triggerProps, { open }) => (
            <Box {...triggerProps}>
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
        </MenuRenderer>
      ),
    },
    {
      label: 'Offset space for menu',
      code: dedent`
        <MenuRenderer
          offsetSpace={['none', 'small']}
          trigger={(triggerProps, { open }) => (
            <Box {...triggerProps}>
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
          <MenuItem onClick={() => {}}>First</MenuItem>
          <MenuItem onClick={() => {}}>Second</MenuItem>
        </MenuRenderer>
      `,
      Example: ({ handler }) => (
        <MenuRenderer
          offsetSpace={['none', 'small']}
          trigger={(triggerProps, { open }) => (
            <Box {...triggerProps}>
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
        </MenuRenderer>
      ),
    },
  ],
};

export default docs;
