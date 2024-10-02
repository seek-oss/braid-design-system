import React, { Children } from 'react';
import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import type { Space } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './Tiles.css';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { RequiredResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
  data?: DataAttributeMap;
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  data,
  ...restProps
}: TilesProps) => (
  <Box
    className={negativeMargin('top', space)}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    <Box
      display="flex"
      flexWrap="wrap"
      className={negativeMargin('left', space)}
    >
      {Children.map(flattenChildren(children), (child) => (
        <Box
          minWidth={0}
          className={resolveResponsiveProp(
            columns,
            styles.columnsMobile,
            styles.columnsTablet,
            styles.columnsDesktop,
            styles.columnsWide,
          )}
        >
          <Box
            height="full"
            // This needs to be a separate element to support IE11.
            paddingTop={space}
            paddingLeft={space}
          >
            {child}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);
