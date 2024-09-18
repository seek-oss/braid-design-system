import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconVisibilitySvg } from './IconVisibilitySvg';
import { IconVisibilityHiddenSvg } from './IconVisibilityHiddenSvg';

export type IconVisibilityProps = IconContainerProps & {
  hidden?: boolean;
};

export const IconVisibility = ({ hidden, ...props }: IconVisibilityProps) => (
  <IconContainer {...props}>
    {(boxProps) => (
      <Box
        component={hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg}
        {...boxProps}
      />
    )}
  </IconContainer>
);
