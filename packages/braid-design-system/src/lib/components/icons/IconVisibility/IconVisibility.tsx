import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconVisibilityHiddenSvg } from './IconVisibilityHiddenSvg';
import { IconVisibilitySvg } from './IconVisibilitySvg';

export type IconVisibilityProps = IconContainerProps & {
  hidden?: boolean;
};

export const IconVisibility: FC<IconVisibilityProps> = ({
  hidden,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
