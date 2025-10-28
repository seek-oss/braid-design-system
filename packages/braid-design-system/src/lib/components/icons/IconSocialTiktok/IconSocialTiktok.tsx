import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialTiktokSvg } from './IconSocialTiktokSvg';

export type IconSocialTiktokProps = IconContainerProps;

export const IconSocialTiktok = (props: IconSocialTiktokProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialTiktokSvg} {...svgProps} />}
  </IconContainer>
);
