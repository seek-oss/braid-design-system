import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSocialLinkedInSvg } from './IconSocialLinkedInSvg';

export type IconSocialLinkedInProps = IconContainerProps;

export const IconSocialLinkedIn = (props: IconSocialLinkedInProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconSocialLinkedInSvg} {...boxProps} />}
  </IconContainer>
);
