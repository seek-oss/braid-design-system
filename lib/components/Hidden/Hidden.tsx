import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Hidden.treat';

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
  const styles = useStyles(styleRefs);
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
