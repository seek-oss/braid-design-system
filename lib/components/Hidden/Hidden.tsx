import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import * as styles from './Hidden.treat';

export interface HiddenProps {
  children: ReactNode;
  mobile?: boolean;
  desktop?: boolean;
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
}

export const Hidden = ({
  children,
  inline = false,
  mobile: hiddenOnMobile = false,
  desktop: hiddenOnDesktop = false,
  screen: hiddenOnScreen = false,
  print: hiddenOnPrint = false,
}: HiddenProps) => {
  const display = inline ? 'inline' : 'block';

  return (
    <Box
      display={[
        hiddenOnMobile || hiddenOnScreen ? 'none' : display,
        hiddenOnDesktop || hiddenOnScreen ? 'none' : display,
      ]}
      className={
        hiddenOnPrint ? useClassNames(styles.hiddenOnPrint) : undefined
      }
      component={inline ? 'span' : 'div'}
    >
      {children}
    </Box>
  );
};
