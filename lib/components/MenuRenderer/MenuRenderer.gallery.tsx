import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  IconChevron,
  Inline,
} from '..';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    Example: () =>
      source(
        <Inline space="none">
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
        </Inline>,
      ),
  },
  {
    label: 'Right aligned',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            align="right"
            trigger={(triggerProps, { open }) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Text>
                  Right aligned menu{' '}
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
        </Inline>,
      ),
  },
  {
    label: 'Offset space for menu',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            offsetSpace={{ mobile: 'none', tablet: 'small' }}
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
        </Inline>,
      ),
  },
];
