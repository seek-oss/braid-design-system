import React from 'react';
import { MenuRenderer, MenuRendererProps } from '../MenuRenderer/MenuRenderer';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconOverflow } from '../icons';
import { Box } from '../Box/Box';
import * as styles from './OverflowMenu.css';

export interface OverflowMenuProps
  extends Omit<MenuRendererProps, 'trigger' | 'align' | 'offsetSpace'> {
  label: string;
  id?: string;
}

export const OverflowMenu = ({
  label,
  children,
  id,
  ...menuProps
}: OverflowMenuProps) => (
  <MenuRenderer
    trigger={(triggerProps) => (
      <Box
        display="flex"
        justifyContent="flexEnd"
        className={styles.triggerOffset}
      >
        <ButtonIcon
          // @ts-expect-error With no id, ButtonIcon will fallback from Tooltip to title internally.
          // ID will no longer be required when React 18 has sufficient adoption and we can safely `useId()`
          id={id}
          icon={<IconOverflow />}
          variant="transparent"
          label={label}
          {...triggerProps}
        />
      </Box>
    )}
    align="right"
    offsetSpace="small"
    {...menuProps}
  >
    {children}
  </MenuRenderer>
);
