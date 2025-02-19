import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMobileSvg } from './IconMobileSvg';

export type IconMobileProps = IconContainerProps;

export const IconMobile = (props: IconMobileProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMobileSvg} {...svgProps} />}
  </IconContainer>
);
