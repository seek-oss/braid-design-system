import React, { useState } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { OverflowMenu, MenuItemCheckbox, Box } from '..';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard usage',
    background: 'card',
    Example: () => {
      const [checked1, setChecked1] = useState(false);
      const [checked2, setChecked2] = useState(false);
      const [checked3, setChecked3] = useState(false);

      return (
        <Box style={{ paddingLeft: 200 }}>
          <OverflowMenu label="Checklist">
            <MenuItemCheckbox checked={checked1} onChange={setChecked1}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={checked2} onChange={setChecked2}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={checked3} onChange={setChecked3}>
              Checkbox
            </MenuItemCheckbox>
          </OverflowMenu>
        </Box>
      );
    },
  },
];
