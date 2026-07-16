import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconVerifiedActiveSvg } from './IconVerifiedActiveSvg';
import { IconVerifiedSvg } from './IconVerifiedSvg';

export type IconVerifiedProps = IconContainerProps & {
  active?: boolean;
};

export const IconVerified: FC<IconVerifiedProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconVerifiedActiveSvg : IconVerifiedSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
