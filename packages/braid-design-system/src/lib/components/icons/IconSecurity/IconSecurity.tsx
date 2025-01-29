import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSecuritySvg } from './IconSecuritySvg';

export type IconSecurityProps = IconContainerProps;

export const IconSecurity = (props: IconSecurityProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSecuritySvg} {...svgProps} />}
  </IconContainer>
);
