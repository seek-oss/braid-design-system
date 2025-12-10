import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialTiktokSvg } from './IconSocialTiktokSvg';

export type IconSocialTiktokProps = IconContainerProps;

export const IconSocialTiktok: FC<IconSocialTiktokProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialTiktokSvg} {...svgProps} />}
  </IconContainer>
);
