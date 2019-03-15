import React, { ReactNode } from 'react';
import Box from '../Box/Box';
import styles from './Hidden.css.js';

export interface HiddenProps {
  children: ReactNode;
  mobile?: boolean;
  desktop?: boolean;
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
}

const Hidden = ({
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
      className={hiddenOnPrint ? styles.hiddenOnPrint : undefined}
      component={inline ? 'span' : 'div'}
    >
      {children}
    </Box>
  );
};

Hidden.displayName = 'Hidden';

export default Hidden;
