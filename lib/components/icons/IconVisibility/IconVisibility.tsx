import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconVisibilitySvg } from './IconVisibilitySvg';
import { IconVisibilityHiddenSvg } from './IconVisibilityHiddenSvg';

export type IconVisibilityProps = UseIconProps & {
  hidden?: boolean;
};

export const IconVisibility = ({ hidden, ...props }: IconVisibilityProps) => {
  const iconProps = useIcon(props);

  return (
    <Box
      component={hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg}
      {...iconProps}
    />
  );
};
