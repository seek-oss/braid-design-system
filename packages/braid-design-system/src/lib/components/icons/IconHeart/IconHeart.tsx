import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconHeartActiveSvg } from './IconHeartActiveSvg';
import { IconHeartSvg } from './IconHeartSvg';

export type IconHeartProps = IconContainerProps & {
  active?: boolean;
};

export const IconHeart = ({ active = false, ...props }: IconHeartProps) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconHeartActiveSvg : IconHeartSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
