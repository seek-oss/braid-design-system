import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSocialXSvg } from '../IconSocialX/IconSocialXSvg';

export type IconSocialTwitterProps = IconContainerProps;

/** @deprecated - use IconSocialX instead */
export const IconSocialTwitter = (props: IconSocialTwitterProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSocialXSvg} {...svgProps} />}
  </IconContainer>
);
