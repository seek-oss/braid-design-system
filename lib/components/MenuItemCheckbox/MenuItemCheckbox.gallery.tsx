import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { OverflowMenu, MenuItemCheckbox, Box } from '..';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    background: 'surface',
    Example: ({ setDefaultState, getState, toggleState }) =>
      source(
        <>
          {setDefaultState('checked1', false)}
          {setDefaultState('checked2', false)}
          {setDefaultState('checked3', false)}
          <Box style={{ maxWidth: '120px' }}>
            <OverflowMenu label="Checklist">
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
