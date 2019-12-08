import React, { Children, ReactNode } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeMarginLeft,
  useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ResponsiveProp } from '../../utils/responsiveProp';
import { Align, alignToFlexAlign } from '../../utils/align';
import * as styleRefs from './Inline.treat';

export interface InlineProps {
  align?: ResponsiveProp<Align>;
  space: ResponsiveSpace;
  children: ReactNode;
}

export const Inline = ({ space = 'none', align, children }: InlineProps) => {
  const styles = useStyles(styleRefs);
  const negativeMarginLeft = useNegativeMarginLeft(space);
  const negativeMarginTop = useNegativeMarginTop(space);

  return (
    <div className={classnames(negativeMarginTop)}>
      <Box
        display="flex"
        justifyContent={alignToFlexAlign(align)}
        className={classnames(styles.flexWrap, negativeMarginLeft)}
      >
        {Children.map(children, child =>
          child !== null && child !== undefined ? (
            <Box paddingLeft={space} paddingTop={space}>
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </div>
  );
};
