import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSocialLinkedInSvg } from './IconSocialLinkedInSvg';

export type IconSocialLinkedInProps = IconContainerProps;

export const IconSocialLinkedIn: FC<IconSocialLinkedInProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialLinkedInSvg} {...svgProps} />}
  </IconContainer>
);
