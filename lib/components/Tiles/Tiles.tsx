import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { Divider, DividerProps } from '../Divider/Divider';
import { ResponsiveSpace } from '../Box/useBoxStyles';
import {
  useNegativeMarginTop,
  useNegativeMarginLeft,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import {
  normaliseResponsiveProp,
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as styleRefs from './Tiles.treat';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  columns: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6>;
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
  const styles = useStyles(styleRefs);

  const responsiveSpace = normaliseResponsiveProp(space);

  const [
    mobileColumns,
    tabletColumns,
    desktopColumns,
  ] = normaliseResponsiveProp(columns);

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
                  display={[
                    mobileColumns === 1 ? 'block' : 'none',
                    tabletColumns === 1 ? 'block' : 'none',
                    desktopColumns === 1 ? 'block' : 'none',
                  ]}
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
