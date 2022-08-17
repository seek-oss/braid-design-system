import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import {
  Box,
  MenuItem,
  MenuItemLink,
  Badge,
  Inline,
  MenuRenderer,
  IconChevron,
  Text,
  IconProfile,
  IconBookmark,
  IconClear,
} from '..';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    background: 'surface',
    Example: () =>
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
          </MenuRenderer>
        </Inline>,
      ),
  },
  {
    label: 'With an icon',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            reserveIconSpace
            width="small"
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
            <MenuItem onClick={() => {}} icon={<IconProfile />}>
              Item
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Item
            </MenuItem>
          </MenuRenderer>
        </Inline>,
      ),
  },
  {
    label: 'With a Badge',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            width="small"
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
            <MenuItem
              onClick={() => {}}
              badge={
                <Badge tone="promote" weight="strong">
                  Badge
                </Badge>
              }
            >
              Item
            </MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </MenuRenderer>
        </Inline>,
      ),
  },
  {
    label: 'With a critical tone',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="none">
          <MenuRenderer
            width="small"
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
            <MenuItem onClick={() => {}} icon={<IconClear />} tone="critical">
              Critical
            </MenuItem>
          </MenuRenderer>
        </Inline>,
      ),
  },
];
