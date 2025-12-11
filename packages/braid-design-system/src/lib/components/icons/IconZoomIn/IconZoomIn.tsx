import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconZoomInSvg } from './IconZoomInSvg';

export type IconZoomInProps = IconContainerProps;

export const IconZoomIn: FC<IconZoomInProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconZoomInSvg} {...svgProps} />}
  </IconContainer>
);
