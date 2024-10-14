import React, { type ReactNode, useContext } from 'react';
import { type BoxProps, Box } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import {
  type ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Hidden.css';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import dedent from 'dedent';

export interface HiddenProps extends ResponsiveRangeProps {
  children: ReactNode;
  component?: BoxProps['component'];
  /**
   * @deprecated The "screen" prop is deprecated and will be removed in a future release.
   *
   * For content designed to improve the screen reader experience, please use use the `HiddenVisually` component instead.
   * Alternatively, for content designed to be hidden unconditionally, remove the `screen` prop.
   * */
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
  ...restProps
}: HiddenProps) => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof screen !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
        The "screen" prop is deprecated and will be removed in a future release.
        For content designed to improve the screen reader experience, please use use the <HiddenVisually> component instead.
        Alternatively, for content designed to be hidden unconditionally, remove the "screen" prop.`,
      );
    }
  }

  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));

  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);

  const hiddenAlways = hiddenOnScreen || (!above && !below && !print);

  const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] =
    resolveResponsiveRangeProps({ above, below });

  const inline = inlineProp ?? (inText || inHeading);
  const display = inline ? 'inline' : 'block';

  return (
    <Box
      display={
        hiddenAlways
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
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
