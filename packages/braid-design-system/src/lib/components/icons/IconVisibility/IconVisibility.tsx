import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconVisibilitySvg } from './IconVisibilitySvg';
import { IconVisibilityHiddenSvg } from './IconVisibilityHiddenSvg';

export type IconVisibilityProps = UseIconProps & {
  hidden?: boolean;
};

export const IconVisibility = ({ hidden, ...props }: IconVisibilityProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = (
    <Box
      component={hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg}
      {...iconProps}
    />
  );

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
