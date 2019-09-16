import React, { AllHTMLAttributes, ReactNode } from 'react';
import { useStyles } from 'sku/treat';
import { Box } from '..';
import { Overlay } from '../private/Overlay/Overlay';
import {
  useIconSize,
  useIconContainerSize,
  UseIconProps,
} from '../../hooks/useIcon';
import * as styleRefs from './IconButton.treat';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface IconButtonProps {
  label?: string;
  children: (props: UseIconProps) => ReactNode;
  onClick: NativeButtonProps['onClick'];
}

export const IconButton = ({ label, onClick, children }: IconButtonProps) => {
  const styles = useStyles(styleRefs);
  const iconContainerStyles = useIconContainerSize();
  const iconStyles = useIconSize();

  return (
    <Box
      component="button"
      cursor="pointer"
      className={styles.button}
      aria-label={label}
      title={label}
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="touchable"
      height="touchable"
      transform="touchable"
      transition="touchable"
    >
      <Box
        position="relative"
        display="flex"
        className={iconContainerStyles}
        alignItems="center"
        justifyContent="center"
        pointerEvents="none"
      >
        <Overlay
          background="card"
          transition="fast"
          borderRadius="full"
          className={styles.hoverOverlay}
        />
        <Overlay
          boxShadow="outlineFocus"
          transition="fast"
          className={styles.focusOverlay}
        />
        <Box position="relative" className={iconStyles}>
          {children({ size: 'fill', tone: 'secondary' })}
        </Box>
      </Box>
    </Box>
  );
};
