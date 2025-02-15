import type { ComponentScreenshot } from 'site/types';

import { Inline, MenuItem, MenuItemCheckbox, MenuItemDivider } from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';

const defaultProps = {
  offsetSpace: 'none',
  align: 'left',
  size: 'standard',
  width: 'content',
  highlightIndex: -1,
  open: true,
  dispatch: () => {},
  focusTrigger: () => {},
  position: 'relative',
  placement: 'bottom',
  reserveIconSpace: false,
} as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} size="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Highlighted before divider',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} size="small" highlightIndex={1}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Highlighted after divider',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} highlightIndex={2}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} size="small" highlightIndex={2}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
  ],
};
