import React, { Children, ReactNode } from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeOffsetX,
  useNegativeOffsetY,
} from '../../hooks/useNegativeOffset/useNegativeOffset';
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
  const negativeOffsetX = useNegativeOffsetX(space);
  const negativeOffsetY = useNegativeOffsetY(space);

  return (
    <Box className={classnames(negativeOffsetY)}>
      <Box
        display="flex"
        justifyContent={alignToFlexAlign(align)}
        className={classnames(styles.flexWrap, negativeOffsetX)}
      >
        {Children.map(children, child =>
          child !== null && child !== undefined ? (
            <Box paddingLeft={space} paddingTop={space}>
              {child}
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};
