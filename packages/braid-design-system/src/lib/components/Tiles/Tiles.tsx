import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  type RequiredResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import * as styles from './Tiles.css';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  columns: RequiredResponsiveValue<number>;
  data?: DataAttributeMap;
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  data,
  ...restProps
}: TilesProps) => {
  const {
    mobile: mobileColumns,
    tablet: tabletColumns,
    desktop: desktopColumns,
    wide: wideColumns,
  } = normalizeResponsiveValue(columns);

  return (
    <Box
      gap={space}
      className={styles.tiles}
      style={assignInlineVars({
        ...(mobileColumns
          ? { [styles.mobileColumnsVar]: `${mobileColumns}` }
          : {}),
        ...(tabletColumns
          ? { [styles.tabletColumnsVar]: `${tabletColumns}` }
          : {}),
        ...(desktopColumns
          ? { [styles.desktopColumnsVar]: `${desktopColumns}` }
          : {}),
        ...(wideColumns ? { [styles.wideColumnsVar]: `${wideColumns}` } : {}),
      })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
