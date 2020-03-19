import * as React from 'react';
import { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Hidden.treat';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';

export interface HiddenProps extends ResponsiveRangeProps {
  children: ReactNode;
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
}

export const Hidden = ({
  children,
  above,
  below,
  screen,
  print,
  inline,
}: HiddenProps) => {
  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);

  const [
    hiddenOnMobile,
    hiddenOnTablet,
    hiddenOnDesktop,
  ] = resolveResponsiveRangeProps({ above, below });

  const styles = useStyles(styleRefs);
  const display = inline ? 'inline' : 'block';

  return (
    <Box
      display={
        hiddenOnScreen
          ? 'none'
          : [
              hiddenOnMobile ? 'none' : display,
              hiddenOnTablet ? 'none' : display,
              hiddenOnDesktop ? 'none' : display,
            ]
      }
      className={hiddenOnPrint ? styles.hiddenOnPrint : undefined}
      component={inline ? 'span' : 'div'}
    >
      {children}
    </Box>
  );
};
