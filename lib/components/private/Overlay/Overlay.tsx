import React from 'react';
import classnames from 'classnames';
import Box, { BoxProps } from '../../Box/Box';
import styles from './Overlay.css.js';

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

const Overlay = ({
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
    className={classnames(styles.root, className)}
  />
);

Overlay.displayName = 'Overlay';

export default Overlay;
