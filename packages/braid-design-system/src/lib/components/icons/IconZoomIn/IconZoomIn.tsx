import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconZoomInSvg } from './IconZoomInSvg';

export type IconZoomInProps = IconContainerProps;

export const IconZoomIn = (props: IconZoomInProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconZoomInSvg} {...svgProps} />}
  </IconContainer>
);
