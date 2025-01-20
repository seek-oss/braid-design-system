import React from 'react';

import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import {
  type MenuRendererProps,
  MenuRenderer,
} from '../MenuRenderer/MenuRenderer';
import { IconOverflow } from '../icons';

import * as styles from './OverflowMenu.css';

export interface OverflowMenuProps
  extends Omit<MenuRendererProps, 'trigger' | 'align' | 'offsetSpace'> {
  label: string;
  id?: string;
}

export const OverflowMenu = ({
  size,
  label,
  children,
  id,
  ...menuProps
}: OverflowMenuProps) => (
  <Box
    className={styles.wrapperPositioning}
    display="flex"
    justifyContent="flexEnd"
  >
    <MenuRenderer
      trigger={(triggerProps) => (
        <ButtonIcon
          // @ts-expect-error With no id, ButtonIcon will fallback from Tooltip to title internally.
          // ID will no longer be required when React 18 has sufficient adoption and we can safely `useId()`
          id={id}
          size={size}
          icon={<IconOverflow />}
          variant="transparent"
          label={label}
          {...triggerProps}
        />
      )}
      align="right"
      size={size}
      offsetSpace={size === 'standard' ? 'small' : 'xsmall'}
      {...menuProps}
    >
      {children}
    </MenuRenderer>
  </Box>
);
