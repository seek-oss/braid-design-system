import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCareerActiveSvg } from './IconCareerActiveSvg';
import { IconCareerSvg } from './IconCareerSvg';

export type IconCareerProps = IconContainerProps & {
  active?: boolean;
};

export const IconCareer: FC<IconCareerProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconCareerActiveSvg : IconCareerSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
