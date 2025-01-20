import source from '@braid-design-system/source.macro';
import React from 'react';
import type { GalleryComponent } from 'site/types';

import {
  MenuItemDivider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  Box,
  IconChevron,
  Text,
  MenuRenderer,
  Inline,
} from '..';

export const galleryItems: GalleryComponent = {
  examples: [
    {
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
                <MenuItem onClick={() => {}}>Button</MenuItem>
                <MenuItemLink href="#">Link</MenuItemLink>
                <MenuItemDivider />
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
  ],
};
