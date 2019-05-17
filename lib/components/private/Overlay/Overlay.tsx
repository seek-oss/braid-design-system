import React from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../../Box/Box';
import * as styles from './Overlay.treat';

export type OverlayProps = Partial<
  Pick<
    BoxProps,
    | 'backgroundColor'
    | 'borderRadius'
    | 'boxShadow'
    | 'transition'
    | 'className'
  >
>;

export const Overlay = ({
  backgroundColor,
  borderRadius,
  boxShadow,
  transition,
  className,
}: OverlayProps) => (
  <Box
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    transition={transition}
    className={useClassNames(styles.root, className)}
  />
);
