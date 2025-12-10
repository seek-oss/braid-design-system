import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconStarActiveSvg } from './IconStarActiveSvg';
import { IconStarSvg } from './IconStarSvg';

export type IconStarProps = IconContainerProps & {
  active?: boolean;
};

export const IconStar: FC<IconStarProps> = ({ active = false, ...props }) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box component={active ? IconStarActiveSvg : IconStarSvg} {...svgProps} />
    )}
  </IconContainer>
);
