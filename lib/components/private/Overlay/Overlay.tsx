import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import * as styleRefs from './Overlay.treat';

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
}: OverlayProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      transition={transition}
      className={classnames(styles.root, className)}
    />
  );
};
