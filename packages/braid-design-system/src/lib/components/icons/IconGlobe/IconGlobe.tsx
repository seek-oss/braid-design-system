import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconGlobeSvg } from './IconGlobeSvg';

export type IconGlobeProps = IconContainerProps;

export const IconGlobe = (props: IconGlobeProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconGlobeSvg} {...svgProps} />}
  </IconContainer>
);
