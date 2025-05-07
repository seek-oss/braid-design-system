import { calc } from '@vanilla-extract/css-utils';
import { type MutableRefObject, type ReactNode, useRef } from 'react';
import type { ComponentScreenshot } from 'site/types';

import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  MenuItemDivider,
  MenuItemCheckbox,
  IconBookmark,
  IconProfile,
  Inline,
} from '../';
import { vars } from '../../../entries/css';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Popover, type PopoverProps } from '../private/Popover/Popover';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import { Menu } from './MenuRenderer';

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
  reserveIconSpace: false,
  placement: 'bottom',
} as const;

const triggerHeight = 44;

const PopoverWrapper = ({
  children,
  popoverPlacement,
}: {
  children: (props: {
    triggerRef: MutableRefObject<HTMLButtonElement | null>;
  }) => ReactNode;
  popoverPlacement: PopoverProps['placement'];
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const wrapperPadding = calc(vars.touchableSize).multiply(2.5).toString();

  return (
    <Box
      display="flex"
      style={
        popoverPlacement === 'bottom'
          ? { paddingBottom: wrapperPadding }
          : { paddingTop: wrapperPadding }
      }
    >
      <Box ref={triggerRef}>
        <Placeholder label="Menu trigger" height={triggerHeight} />
      </Box>
      {children({ triggerRef })}
    </Box>
  );
};

const ScreenshotPopover = ({
  ...props
}: Omit<PopoverProps, 'open' | 'lockPlacement' | 'role'>) => (
  <Popover open lockPlacement role={false} {...props} />
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Box style={{ maxWidth: '150px' }}>
          <MenuRenderer
            offsetSpace="small"
            trigger={(triggerProps) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Placeholder height={triggerHeight} label="Menu trigger" />
              </Box>
            )}
          >
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </MenuRenderer>
        </Box>
      ),
    },
    {
      label: 'Right aligned',
      Example: () => (
        <Box style={{ maxWidth: '150px' }}>
          <MenuRenderer
            align="right"
            offsetSpace="small"
            trigger={(triggerProps) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Placeholder height={triggerHeight} label="Menu trigger" />
              </Box>
            )}
          >
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </MenuRenderer>
        </Box>
      ),
    },
    {
      label: 'Trigger grows to parent layout',
      Example: () => (
        <MenuRenderer
          align="right"
          offsetSpace="small"
          trigger={(triggerProps) => (
            <Box userSelect="none" cursor="pointer" {...triggerProps}>
              <Placeholder height={triggerHeight} label="Menu trigger" />
            </Box>
          )}
        >
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </MenuRenderer>
      ),
    },
    {
      label: 'Placement bottom',
      Example: () => {
        const placement = 'bottom';
        return (
          <PopoverWrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover triggerRef={triggerRef} placement={placement}>
                <Menu {...defaultProps} placement={placement}>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                </Menu>
              </ScreenshotPopover>
            )}
          </PopoverWrapper>
        );
      },
    },
    {
      label: 'Placement bottom with small offset',
      Example: () => {
        const placement = 'bottom';
        return (
          <PopoverWrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="small"
              >
                <Menu {...defaultProps} placement={placement}>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                </Menu>
              </ScreenshotPopover>
            )}
          </PopoverWrapper>
        );
      },
    },
    {
      label: 'Placement top',
      Example: () => {
        const placement = 'top';
        return (
          <PopoverWrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover triggerRef={triggerRef} placement={placement}>
                <Menu {...defaultProps} placement={placement}>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                </Menu>
              </ScreenshotPopover>
            )}
          </PopoverWrapper>
        );
      },
    },
    {
      label: 'Placement top with small offset',
      Example: () => {
        const placement = 'top';
        return (
          <PopoverWrapper popoverPlacement={placement}>
            {({ triggerRef }) => (
              <ScreenshotPopover
                triggerRef={triggerRef}
                placement={placement}
                offsetSpace="small"
              >
                <Menu {...defaultProps} placement={placement}>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                  <MenuItem onClick={() => {}}>Item</MenuItem>
                </Menu>
              </ScreenshotPopover>
            )}
          </PopoverWrapper>
        );
      },
    },
    {
      label: 'Small size (virtual touch target)',
      Example: () => (
        <Box display="flex" data={{ [debugTouchableAttrForDataProp]: '' }}>
          <Menu {...defaultProps} width="content" size="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Width content',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} width="content">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} width="content" size="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Width small',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} width="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </Menu>
          <Menu {...defaultProps} width="small" size="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Width medium',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} width="medium">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} width="medium" size="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Width large',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} width="large">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} width="large" size="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Reserve icon space',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} reserveIconSpace>
            <MenuItem onClick={() => {}} icon={<IconProfile />}>
              Item
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Item
            </MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </Menu>
          <Menu {...defaultProps} reserveIconSpace size="small">
            <MenuItem onClick={() => {}} icon={<IconProfile />}>
              Item
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Item
            </MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Height limit',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps}>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
          </Menu>
          <Menu {...defaultProps} size="small">
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItem onClick={() => {}}>Button</MenuItem>
          </Menu>
        </Inline>
      ),
    },
  ],
};
