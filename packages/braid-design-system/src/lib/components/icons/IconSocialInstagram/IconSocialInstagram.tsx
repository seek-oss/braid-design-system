import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSocialInstagramSvg } from './IconSocialInstagramSvg';

export type IconSocialInstagramProps = IconContainerProps;

export const IconSocialInstagram = (props: IconSocialInstagramProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconSocialInstagramSvg} {...boxProps} />}
  </IconContainer>
);
