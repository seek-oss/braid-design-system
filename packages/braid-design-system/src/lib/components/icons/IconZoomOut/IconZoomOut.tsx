import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconZoomOutSvg } from './IconZoomOutSvg';

export type IconZoomOutProps = IconContainerProps;

export const IconZoomOut: FC<IconZoomOutProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconZoomOutSvg} {...svgProps} />}
  </IconContainer>
);
