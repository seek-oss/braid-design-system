import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import { Overlay } from '../private/Overlay/Overlay';

import * as styleRefs from './Card.treat';

export interface CardProps {
  children: ReactNode;
  tone?: 'info' | 'promote';
  clickable?: boolean;
  component?: BoxProps['component'];
}

export const Card = ({ children, component, clickable, tone }: CardProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component={component}
      position="relative"
      background="card"
      padding="gutter"
      borderRadius="standard"
      boxShadow="small"
      cursor={clickable ? 'pointer' : undefined}
      transition={clickable ? 'fast' : undefined}
      className={clickable ? styles.clickable : undefined}
    >
      {clickable ? (
        <Overlay
          boxShadow="medium"
          borderRadius="standard"
          transition="fast"
          className={styles.hover}
        />
      ) : null}
      {tone ? (
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          paddingLeft="xxsmall"
          borderRadius="standard"
          background={tone}
          className={styles.toneKeyline}
        />
      ) : null}
      {children}
    </Box>
  );
};
