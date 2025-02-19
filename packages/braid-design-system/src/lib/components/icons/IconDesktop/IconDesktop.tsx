import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDesktopSvg } from './IconDesktopSvg';

export type IconDesktopProps = IconContainerProps;

export const IconDesktop = (props: IconDesktopProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDesktopSvg} {...svgProps} />}
  </IconContainer>
);
