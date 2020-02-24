import React, { Children } from 'react';
import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeMarginLeft,
  useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ResponsiveProp } from '../../utils/responsiveProp';
import { Align, alignToFlexAlign } from '../../utils/align';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';

export interface InlineProps {
  align?: ResponsiveProp<Align>;
  space: ResponsiveSpace;
  children: ReactNodeNoStrings;
}

export const Inline = ({ space = 'none', align, children }: InlineProps) => {
  const negativeMarginLeft = useNegativeMarginLeft(space);
  const negativeMarginTop = useNegativeMarginTop(space);

  return (
    <Box className={negativeMarginTop}>
      <Box
        display="flex"
        justifyContent={alignToFlexAlign(align)}
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
