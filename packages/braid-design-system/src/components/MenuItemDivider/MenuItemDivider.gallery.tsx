import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import {
  OverflowMenu,
  MenuItemDivider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  Box,
} from '..';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    background: 'card',
    Example: ({ handler, setDefaultState, getState, toggleState }) =>
      source(
        <>
          {setDefaultState('checked1', false)}
          {setDefaultState('checked2', false)}
          {setDefaultState('checked3', false)}

          <Box style={{ paddingLeft: 200 }}>
            <OverflowMenu label="Options">
              <MenuItem onClick={handler}>Button</MenuItem>
              <MenuItemLink href="#" onClick={handler}>
                Link
              </MenuItemLink>
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
            </OverflowMenu>
          </Box>
        </>,
      ),
  },
];
