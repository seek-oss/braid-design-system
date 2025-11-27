import { Box } from '../Box/Box';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import {
  type MenuRendererProps,
  MenuRenderer,
} from '../MenuRenderer/MenuRenderer';
import { IconOverflow } from '../icons';

import * as styles from './OverflowMenu.css';

export interface OverflowMenuProps extends Omit<
  MenuRendererProps,
  'trigger' | 'align' | 'offsetSpace'
> {
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
      offsetSpace="xxsmall"
      {...menuProps}
    >
      {children}
    </MenuRenderer>
  </Box>
);
