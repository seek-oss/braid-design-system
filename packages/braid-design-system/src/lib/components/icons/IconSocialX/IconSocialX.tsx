import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialXSvg } from './IconSocialXSvg';

export type IconSocialXProps = IconContainerProps;

export const IconSocialX = (props: IconSocialXProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialXSvg} {...svgProps} />}
  </IconContainer>
);
