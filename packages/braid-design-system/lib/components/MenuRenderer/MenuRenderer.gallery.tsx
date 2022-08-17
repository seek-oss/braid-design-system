import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  IconChevron,
  Inline,
  Strong,
  IconProfile,
  IconBookmark,
  MenuItemDivider,
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
    label: 'Placement',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            placement="top"
            offsetSpace="small"
            trigger={(triggerProps, { open }) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Text>
                  Placed on top{' '}
                  <IconChevron
                    direction={open ? 'down' : 'up'}
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
  {
    label: 'Width',
    Example: ({ setState, getState, setDefaultState }) =>
      source(
        <>
          {setDefaultState('width', 'content')}
          <Inline space="none">
            <MenuRenderer
              offsetSpace="small"
              width={getState('width')}
              trigger={(triggerProps, { open }) => (
                <Box userSelect="none" cursor="pointer" {...triggerProps}>
                  <Text>
                    Menu width: <Strong>{getState('width')}</Strong>{' '}
                    <IconChevron
                      direction={open ? 'up' : 'down'}
                      alignY="lowercase"
                    />
                  </Text>
                </Box>
              )}
            >
              <MenuItem onClick={() => setState('width', 'content')}>
                Content
              </MenuItem>
              <MenuItem onClick={() => setState('width', 'small')}>
                Small
              </MenuItem>
              <MenuItem onClick={() => setState('width', 'medium')}>
                Medium
              </MenuItem>
              <MenuItem onClick={() => setState('width', 'large')}>
                Large
              </MenuItem>
            </MenuRenderer>
          </Inline>
        </>,
      ),
  },
  {
    label: 'Reserving icon space',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            reserveIconSpace
            offsetSpace="small"
            width="small"
            trigger={(triggerProps, { open }) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Text>
                  Reserved icon space{' '}
                  <IconChevron
                    direction={open ? 'up' : 'down'}
                    alignY="lowercase"
                  />
                </Text>
              </Box>
            )}
          >
            <MenuItem onClick={() => {}} icon={<IconProfile />}>
              Item
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Item
            </MenuItem>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </MenuRenderer>
        </Inline>,
      ),
  },
];
