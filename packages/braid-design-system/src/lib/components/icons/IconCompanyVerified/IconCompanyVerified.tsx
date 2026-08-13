import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCompanyVerifiedSvg } from './IconCompanyVerifiedSvg';

export type IconCompanyVerifiedProps = IconContainerProps;

export const IconCompanyVerified: FC<IconCompanyVerifiedProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCompanyVerifiedSvg} {...svgProps} />}
  </IconContainer>
);
