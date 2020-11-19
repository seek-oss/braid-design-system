import React from 'react';
import dedent from 'dedent';
import { ComponentExample } from '../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  IconChevron,
} from '..';

export const galleryItems: ComponentExample[] = [
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
      <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>{children}</Box>
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
];
