import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  OverflowMenu,
  MenuItemDivider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  Stack,
  Text,
  TextLink,
  Box,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [],
  description: (
    <Stack space="large">
      <Text>
        Used to separate groups within menu components, e.g.{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Standard usage',
      background: 'card',
      Example: ({ handler }) => {
        const [checked1, setChecked1] = useState(false);
        const [checked2, setChecked2] = useState(false);
        const [checked3, setChecked3] = useState(false);

        return (
          <Box style={{ paddingLeft: 200 }}>
            <OverflowMenu label="Options">
              <MenuItem onClick={handler}>Button</MenuItem>
              <MenuItemLink href="#" onClick={handler}>
                Link
              </MenuItemLink>
              <MenuItemDivider />
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
  ],
};

export default docs;
