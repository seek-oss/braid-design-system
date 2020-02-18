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

type SpaceProps =
  | {
      space: ResponsiveSpace;
    }
  | {
      spaceX: ResponsiveSpace;
      spaceY: ResponsiveSpace;
    };

export type InlineProps = {
  align?: ResponsiveProp<Align>;
  children: ReactNodeNoStrings;
} & SpaceProps;

export const Inline = ({ align, children, ...spaceProps }: InlineProps) => {
  const spaceX = 'spaceX' in spaceProps ? spaceProps.spaceX : spaceProps.space;
  const spaceY = 'spaceY' in spaceProps ? spaceProps.spaceY : spaceProps.space;

  const negativeMarginLeft = useNegativeMarginLeft(spaceX);
  const negativeMarginTop = useNegativeMarginTop(spaceY);

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
            <Box minWidth={0} paddingLeft={spaceX} paddingTop={spaceY}>
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};
