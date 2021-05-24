/* eslint-disable no-nested-ternary */
import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { Divider, DividerProps } from '../Divider/Divider';
import { Space } from '../Box/boxStyles';
import {
  useNegativeMarginTop,
  useNegativeMarginLeft,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { resolveResponsiveProp } from '../../utils/responsiveProp';
import * as styles from './Tiles.css';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  normalizeResponsiveValue,
  ResponsiveValue,
} from '../../sprinkles/sprinkles.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: ResponsiveValue<Space>;
  columns: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  dividers = false,
  data,
}: TilesProps) => {
  const responsiveSpace = normalizeResponsiveValue(space);

  const {
    mobile: mobileColumns = 1,
    tablet: tabletColumns,
    desktop: desktopColumns,
  } = normalizeResponsiveValue(columns);

  const negativeMarginTop = useNegativeMarginTop(responsiveSpace);
  const negativeMarginLeft = useNegativeMarginLeft(responsiveSpace);

  return (
    <Box
      className={negativeMarginTop}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box display="flex" flexWrap="wrap" className={negativeMarginLeft}>
        {Children.map(flattenChildren(children), (child, i) => (
          <Box
            minWidth={0}
            className={resolveResponsiveProp(
              columns,
              styles.columnsMobile,
              styles.columnsTablet,
              styles.columnsDesktop,
            )}
          >
            <Box
              height="full"
              // This needs to be a separate element to support IE11.
              paddingTop={responsiveSpace}
              paddingLeft={responsiveSpace}
            >
              {dividers && i > 0 ? (
                <Box
                  paddingBottom={responsiveSpace}
                  display={{
                    mobile: mobileColumns
                      ? mobileColumns === 1
                        ? 'block'
                        : 'none'
                      : undefined,
                    tablet: tabletColumns
                      ? tabletColumns === 1
                        ? 'block'
                        : 'none'
                      : undefined,
                    desktop: desktopColumns
                      ? desktopColumns === 1
                        ? 'block'
                        : 'none'
                      : undefined,
                  }}
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
};
