import React, { Children } from 'react';
import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeMarginLeft,
  useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ResponsiveProp } from '../../utils/responsiveProp';
import {
  Align,
  alignToFlexAlign,
  alignYToFlexAlign,
  AlignY,
} from '../../utils/align';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

export interface InlineProps {
  align?: ResponsiveProp<Align>;
  alignY?: ResponsiveProp<AlignY>;
  space: ResponsiveSpace;
  children: ReactNodeNoStrings;
}

export const Inline = ({
  space = 'none',
  align,
  alignY,
  children,
}: InlineProps) => {
  const negativeMarginLeft = useNegativeMarginLeft(space);
  const negativeMarginTop = useNegativeMarginTop(space);

  return (
    <Box className={negativeMarginTop}>
      <Box
        display="flex"
        justifyContent={alignToFlexAlign(align)}
        alignItems={alignYToFlexAlign(alignY)}
        flexWrap="wrap"
        className={negativeMarginLeft}
      >
        {Children.map(children, child =>
          child !== null && child !== undefined ? (
            <Box minWidth={0} paddingLeft={space} paddingTop={space}>
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};
