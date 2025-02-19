import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconImageSvg } from './IconImageSvg';

export type IconImageProps = IconContainerProps;

export const IconImage = (props: IconImageProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconImageSvg} {...svgProps} />}
  </IconContainer>
);
