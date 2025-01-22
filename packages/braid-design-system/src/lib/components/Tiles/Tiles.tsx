import { assignInlineVars } from '@vanilla-extract/dynamic';
import React from 'react';

import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Box } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Tiles.css';
import {
  type RequiredResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';

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
  const normalizedResponsiveColumns = normalizeResponsiveValue(columns);
  const {
    mobile: mobileColumns = '1',
    tablet: tabletColumns = mobileColumns,
    desktop: desktopColumns = tabletColumns,
    wide: wideColumns = desktopColumns,
  } = normalizedResponsiveColumns;

  return (
    <Box
      gap={space}
      className={styles.tiles}
      style={assignInlineVars({
        [styles.mobileColumnsVar]: String(mobileColumns),
        [styles.tabletColumnsVar]: String(tabletColumns),
        [styles.desktopColumnsVar]: String(desktopColumns),
        [styles.wideColumnsVar]: String(wideColumns),
      })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
