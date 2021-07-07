import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { Divider, DividerProps } from '../Divider/Divider';
import { Space } from '../../css/atoms/atoms';
import {
  negativeMarginTop,
  negativeMarginLeft,
} from '../../css/negativeMargin/negativeMargin';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './Tiles.css';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  mapResponsiveValue,
  RequiredResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  dividers = false,
  data,
}: TilesProps) => (
  <Box
    className={negativeMarginTop(space)}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    <Box display="flex" flexWrap="wrap" className={negativeMarginLeft(space)}>
      {Children.map(flattenChildren(children), (child, i) => (
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
            {dividers && i > 0 ? (
              <Box
                paddingBottom={space}
                display={mapResponsiveValue(columns, (column) =>
                  column === 1 ? 'block' : 'none',
                )}
              >
                {typeof dividers === 'string' ? (
                  <Divider weight={dividers} />
                ) : (
                  <Divider />
                )}
              </Box>
            ) : null}
            {child}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);
