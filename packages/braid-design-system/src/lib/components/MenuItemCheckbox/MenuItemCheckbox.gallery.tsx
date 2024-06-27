import React from 'react';
import type { GalleryComponent } from 'site/types';
import {
  MenuItemCheckbox,
  Box,
  Badge,
  IconChevron,
  Text,
  MenuRenderer,
  Inline,
} from '..';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Default',
      Example: ({ setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('checked1', false)}
            {setDefaultState('checked2', false)}
            {setDefaultState('checked3', false)}
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
                <MenuItemCheckbox
                  checked={getState('checked1')}
                  onChange={() => toggleState('checked1')}
                >
                  Checkbox
                </MenuItemCheckbox>
                <MenuItemCheckbox
                  checked={getState('checked2')}
                  onChange={() => toggleState('checked2')}
                >
                  Checkbox
                </MenuItemCheckbox>
                <MenuItemCheckbox
                  checked={getState('checked3')}
                  onChange={() => toggleState('checked3')}
                >
                  Checkbox
                </MenuItemCheckbox>
              </MenuRenderer>
            </Inline>
          </>,
        ),
    },
    {
      label: 'With a Badge',
      Example: ({ setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('checked1', false)}
            {setDefaultState('checked2', false)}
            {setDefaultState('checked3', false)}
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
                <MenuItemCheckbox
                  checked={getState('checked1')}
                  onChange={() => toggleState('checked1')}
                >
                  Checkbox
                </MenuItemCheckbox>
                <MenuItemCheckbox
                  checked={getState('checked2')}
                  onChange={() => toggleState('checked2')}
                  badge={
                    <Badge tone="promote" weight="strong">
                      Badge
                    </Badge>
                  }
                >
                  Checkbox
                </MenuItemCheckbox>
                <MenuItemCheckbox
                  checked={getState('checked3')}
                  onChange={() => toggleState('checked3')}
                >
                  Checkbox
                </MenuItemCheckbox>
              </MenuRenderer>
            </Inline>
          </>,
        ),
    },
  ],
};
