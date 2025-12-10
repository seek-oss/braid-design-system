import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconEnlargeActiveSvg } from './IconEnlargeActiveSvg';
import { IconEnlargeSvg } from './IconEnlargeSvg';

export type IconEnlargeProps = IconContainerProps & {
  active?: boolean;
};

export const IconEnlarge: FC<IconEnlargeProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconEnlargeActiveSvg : IconEnlargeSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
