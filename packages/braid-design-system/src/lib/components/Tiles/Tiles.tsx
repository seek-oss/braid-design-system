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
  /**
   * Defaulting the normalised column values to empty strings so that when
   * parsed to strings for `assignInlineVars`, they are correctly omitted
   * from the style attribute when not defined.
   *
   * Without this, `undefined` would be parsed to the string "undefined",
   * requiring additional logic to omit them manually from the style attribute.
   */
  const {
    mobile: mobileColumns = '',
    tablet: tabletColumns = '',
    desktop: desktopColumns = '',
    wide: wideColumns = '',
  } = normalizeResponsiveValue(columns);

  return (
    <Box
      gap={space}
      className={styles.tiles}
      style={assignInlineVars({
        [styles.mobileColumnsVar]: String(mobileColumns) || undefined,
        [styles.tabletColumnsVar]: String(tabletColumns) || undefined,
        [styles.desktopColumnsVar]: String(desktopColumns) || undefined,
        [styles.wideColumnsVar]: String(wideColumns) || undefined,
      })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
