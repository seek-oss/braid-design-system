import React, { useContext, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import {
  resolveResponsiveRangeProps,
  ResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Hidden.css';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';

export interface HiddenProps extends ResponsiveRangeProps {
  children: ReactNode;
  component?: BoxProps['component'];
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
  data?: DataAttributeMap;
}

export const Hidden = ({
  children,
  component,
  above,
  below,
  screen,
  print,
  inline: inlineProp,
  data,
}: HiddenProps) => {
  if (process.env.NODE_ENV === 'development' && screen) {
    // eslint-disable-next-line no-console
    console.warn(
      `You used the "screen" prop on Hidden, but this probably doesn't do what you expect. If you're trying to provide content to screen readers without rendering it to the screen, use the <HiddenVisually> component instead. The "screen" prop is likely to be deprecated in a future release.`,
    );
  }

  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));

  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);
  const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] =
    resolveResponsiveRangeProps({ above, below });

  const inline = inlineProp ?? (inText || inHeading);
  const display = inline ? 'inline' : 'block';

  return (
    <Box
      display={
        hiddenOnScreen
          ? 'none'
          : optimizeResponsiveArray([
              hiddenOnMobile ? 'none' : display,
              hiddenOnTablet ? 'none' : display,
              hiddenOnDesktop ? 'none' : display,
              hiddenOnWide ? 'none' : display,
            ])
      }
      className={hiddenOnPrint ? styles.hiddenOnPrint : undefined}
      component={component || (inline ? 'span' : 'div')}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {children}
    </Box>
  );
};
