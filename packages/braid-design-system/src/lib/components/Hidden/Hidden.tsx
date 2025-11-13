import { type ReactNode, useContext } from 'react';

import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import {
  type ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from '../../utils/resolveResponsiveRangeProps';
import { type BoxProps, Box } from '../Box/Box';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Hidden.css';

export interface HiddenProps extends ResponsiveRangeProps {
  children: ReactNode;
  component?: BoxProps['component'];
  print?: boolean;
  inline?: boolean;
  data?: DataAttributeMap;
}

export const Hidden = ({
  children,
  component,
  above,
  below,
  print,
  inline: inlineProp,
  data,
  ...restProps
}: HiddenProps) => {
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));

  const hiddenOnPrint = Boolean(print);
  const hiddenAlways = !above && !below && !print;

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
