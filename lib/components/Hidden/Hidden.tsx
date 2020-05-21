import React, { useContext, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import TextContext from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/responsiveRangeProps';
import * as styleRefs from './Hidden.treat';

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
  inline: inlineProp,
}: HiddenProps) => {
  if (process.env.NODE_ENV === 'development' && screen) {
    // eslint-disable-next-line no-console
    console.warn(
      `You used the "screen" prop on Hidden, but this probably doesn't do what you expect. If you're trying to provide content to screen readers without rendering it to the screen, use the <HiddenVisually> component instead. The "screen" prop is likely to be deprecated in a future release.`,
    );
  }

  const styles = useStyles(styleRefs);
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));

  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);
  const [
    hiddenOnMobile,
    hiddenOnTablet,
    hiddenOnDesktop,
  ] = resolveResponsiveRangeProps({ above, below });

  const inline = inlineProp ?? (inText || inHeading);
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
