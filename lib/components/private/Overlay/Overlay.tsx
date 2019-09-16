import React from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../../Box/Box';
import * as styleRefs from './Overlay.treat';

export type OverlayProps = Partial<
  Pick<
    BoxProps,
    | 'children'
    | 'background'
    | 'borderRadius'
    | 'boxShadow'
    | 'transition'
    | 'className'
  >
>;

export const Overlay = ({
  background,
  borderRadius,
  boxShadow,
  transition,
  className,
  children,
}: OverlayProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="absolute"
      pointerEvents="none"
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      transition={transition}
      className={classnames(styles.root, className)}
    >
      {children}
    </Box>
  );
};
