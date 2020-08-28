import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { OverflowMenu, MenuItemCheckbox, Stack, Text, TextLink, Box } from '..';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [],
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">
          WAI-ARIA Menu Pattern.
        </TextLink>
      </Text>
      <Text>
        For use within menu components, e.g.{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>,{' '}
        <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Standard usage',
      background: 'card',
      Example: () => {
        const [checked1, setChecked1] = useState(false);
        const [checked2, setChecked2] = useState(false);
        const [checked3, setChecked3] = useState(false);

        return (
          <Box style={{ paddingLeft: 200 }}>
            <OverflowMenu label="Options">
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
