import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPersonVerifiedSvg } from './IconPersonVerifiedSvg';

export type IconPersonVerifiedProps = IconContainerProps;

export const IconPersonVerified: FC<IconPersonVerifiedProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPersonVerifiedSvg} {...svgProps} />}
  </IconContainer>
);
